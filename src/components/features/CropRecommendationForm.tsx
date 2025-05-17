
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";

interface RecommendationResult {
  cropName: string;
  confidence: number;
  description: string;
  imageUrl: string;
  suitability: "Excellent" | "Good" | "Moderate";
}

const cropDescriptions = {
  "Rice": "A staple food crop and source of income for many farmers. Grows well in waterlogged conditions.",
  "Wheat": "A major cereal grain, globally cultivated as a staple food. Prefers moderate temperatures and well-drained soil.",
  "Maize": "Also known as corn, it's used for both human consumption and animal feed. Requires moderate water and plenty of sunlight.",
  "Cotton": "A soft, fluffy staple fiber that grows in a boll around the seeds of cotton plants. Prefers warm conditions and rich soil.",
  "Sugarcane": "A tropical grass cultivated for sugar production. Requires high rainfall or irrigation and fertile soil."
};

export default function CropRecommendationForm() {
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [ph, setPh] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [soilType, setSoilType] = useState("loamy");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<RecommendationResult[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nitrogen || !phosphorus || !potassium || !temperature || !humidity || !ph || !rainfall) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call to ML model
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock data - in a real app, this would come from the ML service
      const mockResults: RecommendationResult[] = [
        {
          cropName: "Rice",
          confidence: 92,
          description: cropDescriptions["Rice"],
          imageUrl: "https://images.unsplash.com/photo-1568347403966-7eef482e2f02?q=80&w=200&auto=format&fit=crop",
          suitability: "Excellent"
        },
        {
          cropName: "Maize",
          confidence: 84,
          description: cropDescriptions["Maize"],
          imageUrl: "https://images.unsplash.com/photo-1551795327-20e936ab40b6?q=80&w=200&auto=format&fit=crop",
          suitability: "Good"
        },
        {
          cropName: "Cotton",
          confidence: 76,
          description: cropDescriptions["Cotton"],
          imageUrl: "https://images.unsplash.com/photo-1551754885-61f6a8934af1?q=80&w=200&auto=format&fit=crop",
          suitability: "Moderate"
        }
      ];
      
      setResults(mockResults);
      toast({
        title: "Analysis complete",
        description: "Crop recommendations are ready",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get recommendations. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setNitrogen("");
    setPhosphorus("");
    setPotassium("");
    setTemperature("");
    setHumidity("");
    setPh("");
    setRainfall("");
    setSoilType("loamy");
    setResults([]);
  };

  return (
    <div className="space-y-6">
      <Card className="agro-card-shadow">
        <CardHeader>
          <CardTitle>Crop Recommendation</CardTitle>
          <CardDescription>
            Enter your soil and environmental data to get personalized crop recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Label htmlFor="temperature">Temperature (°C)</Label>
                <Input
                  id="temperature"
                  type="number"
                  placeholder="e.g. 25"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="humidity">Humidity (%)</Label>
                <Input
                  id="humidity"
                  type="number"
                  placeholder="e.g. 75"
                  value={humidity}
                  onChange={(e) => setHumidity(e.target.value)}
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
                  placeholder="e.g. 80"
                  value={rainfall}
                  onChange={(e) => setRainfall(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="soilType">Soil Type</Label>
                <Select value={soilType} onValueChange={setSoilType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="loamy">Loamy</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="clayey">Clayey</SelectItem>
                    <SelectItem value="silty">Silty</SelectItem>
                    <SelectItem value="peaty">Peaty</SelectItem>
                    <SelectItem value="chalky">Chalky</SelectItem>
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
                ) : "Get Recommendations"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      {results.length > 0 && (
        <Card className="agro-card-shadow">
          <CardHeader>
            <CardTitle>Recommended Crops</CardTitle>
            <CardDescription>Based on your soil and environment data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {results.map((result) => (
                <div key={result.cropName} className="flex flex-col border rounded-lg overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={result.imageUrl} 
                      alt={result.cropName} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg">{result.cropName}</h3>
                      <div className={`px-2 py-1 text-xs rounded-full ${
                        result.suitability === "Excellent" 
                          ? "bg-green-100 text-green-800" 
                          : result.suitability === "Good"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-orange-100 text-orange-800"
                      }`}>
                        {result.suitability}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-agro-primary h-2.5 rounded-full" 
                          style={{ width: `${result.confidence}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">{result.confidence}%</span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground flex-1">{result.description}</p>
                    <Button 
                      variant="outline" 
                      className="mt-4 text-agro-primary border-agro-primary hover:bg-agro-light/20"
                    >
                      More Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            Recommendations are based on soil characteristics and environmental conditions.
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
