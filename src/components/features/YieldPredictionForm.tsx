
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarGrid, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Loader2 } from "lucide-react";

interface PredictionResult {
  crop: string;
  predictedYield: number;
  confidenceLevel: number;
  unit: string;
  historicalAverage: number;
  potentialRange: [number, number];
}

const historicalData = [
  { year: '2019', yield: 5.2 },
  { year: '2020', yield: 5.8 },
  { year: '2021', yield: 5.6 },
  { year: '2022', yield: 6.1 },
  { year: '2023', yield: 6.3 },
  { year: '2024', yield: 0 }, // Will be replaced with prediction
];

export default function YieldPredictionForm() {
  const [crop, setCrop] = useState("rice");
  const [area, setArea] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [ph, setPh] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [irrigation, setIrrigation] = useState("");
  const [pesticide, setPesticide] = useState("low");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const { toast } = useToast();
  
  const [chartData, setChartData] = useState(historicalData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!crop || !area || !nitrogen || !phosphorus || !potassium || !ph || !rainfall || !irrigation) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call to ML model
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock data - in a real app, this would come from the ML service
      const mockResult: PredictionResult = {
        crop: crop.charAt(0).toUpperCase() + crop.slice(1),
        predictedYield: 6.8,
        confidenceLevel: 87,
        unit: "tons/hectare",
        historicalAverage: 5.8,
        potentialRange: [6.2, 7.4]
      };
      
      setResult(mockResult);
      
      // Update chart data with prediction
      const newChartData = [...historicalData];
      newChartData[newChartData.length - 1] = {
        year: '2024',
        yield: mockResult.predictedYield
      };
      setChartData(newChartData);
      
      toast({
        title: "Prediction complete",
        description: "Yield prediction is ready",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get prediction. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setCrop("rice");
    setArea("");
    setNitrogen("");
    setPhosphorus("");
    setPotassium("");
    setPh("");
    setRainfall("");
    setIrrigation("");
    setPesticide("low");
    setResult(null);
    setChartData(historicalData);
  };

  const confidenceData = result ? [
    {
      name: "Confidence",
      value: result.confidenceLevel,
      fill: "#2E7D32",
    },
  ] : [];

  return (
    <div className="space-y-6">
      <Card className="agro-card-shadow">
        <CardHeader>
          <CardTitle>Crop Yield Prediction</CardTitle>
          <CardDescription>
            Enter crop and field data to predict your expected yield
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crop">Crop Type</Label>
                <Select value={crop} onValueChange={setCrop}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="area">Area (hectares)</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="e.g. 5"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nitrogen">Nitrogen (N) in kg/ha</Label>
                <Input
                  id="nitrogen"
                  type="number"
                  placeholder="e.g. 90"
                  value={nitrogen}
                  onChange={(e) => setNitrogen(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phosphorus">Phosphorus (P) in kg/ha</Label>
                <Input
                  id="phosphorus"
                  type="number"
                  placeholder="e.g. 45"
                  value={phosphorus}
                  onChange={(e) => setPhosphorus(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="potassium">Potassium (K) in kg/ha</Label>
                <Input
                  id="potassium"
                  type="number"
                  placeholder="e.g. 40"
                  value={potassium}
                  onChange={(e) => setPotassium(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ph">pH Value</Label>
                <Input
                  id="ph"
                  type="number"
                  step="0.1"
                  placeholder="e.g. 6.5"
                  value={ph}
                  onChange={(e) => setPh(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rainfall">Rainfall (mm)</Label>
                <Input
                  id="rainfall"
                  type="number"
                  placeholder="e.g. 200"
                  value={rainfall}
                  onChange={(e) => setRainfall(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="irrigation">Irrigation (mm)</Label>
                <Input
                  id="irrigation"
                  type="number"
                  placeholder="e.g. 80"
                  value={irrigation}
                  onChange={(e) => setIrrigation(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pesticide">Pesticide Use</Label>
                <Select value={pesticide} onValueChange={setPesticide}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pesticide level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={handleReset} type="button">Reset</Button>
              <Button type="submit" disabled={isLoading} className="bg-agro-primary hover:bg-agro-dark">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : "Predict Yield"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      {result && (
        <Card className="agro-card-shadow">
          <CardHeader>
            <CardTitle>Yield Prediction Results</CardTitle>
            <CardDescription>For {result.crop} crop</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold mb-4">Prediction Summary</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Predicted Yield</p>
                    <p className="text-3xl font-bold text-agro-dark">
                      {result.predictedYield} <span className="text-base font-normal">{result.unit}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Historical Average</p>
                    <p className="text-xl font-medium">{result.historicalAverage} {result.unit}</p>
                    <div className="text-sm text-agro-primary mt-1">
                      {((result.predictedYield - result.historicalAverage) / result.historicalAverage * 100).toFixed(1)}% change from average
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Potential Range</p>
                    <p className="text-xl font-medium">{result.potentialRange[0]} - {result.potentialRange[1]} {result.unit}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Expected Production</p>
                    <p className="text-xl font-medium">
                      {(result.predictedYield * parseFloat(area)).toFixed(1)} tons
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-md font-medium mb-2">Prediction Confidence</h4>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadialBarChart 
                        cx="50%" 
                        cy="50%" 
                        innerRadius="60%" 
                        outerRadius="80%" 
                        barSize={10} 
                        data={confidenceData} 
                        startAngle={90} 
                        endAngle={-270}
                      >
                        <RadialBar
                          background
                          dataKey="value"
                          cornerRadius={10}
                          fill="#2E7D32"
                        />
                        <PolarGrid />
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-xl font-bold"
                          fill="#2E7D32"
                        >
                          {result.confidenceLevel}%
                        </text>
                      </RadialBarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Historical Comparison</h3>
                <div className="h-[300px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey="yield" 
                        name="Yield (t/ha)" 
                        fill={(data, index) => index === chartData.length - 1 ? "#2E7D32" : "#81C784"}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Recommendations</h4>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-agro-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Consider increasing nitrogen application by 10% to optimize yield.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-agro-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Monitor pH levels as they may be slightly below optimal range.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-agro-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Your irrigation schedule is efficient, maintain current levels.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            Predictions are based on historical data and current field conditions.
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
