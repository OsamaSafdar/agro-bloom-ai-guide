
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";

interface FertilizerRecommendation {
  name: string;
  composition: string;
  application: string;
  amountPerHectare: string;
  timing: string;
  method: string;
  costEstimate: string;
  benefits: string[];
  precautions: string[];
}

export default function FertilizerRecommendationForm() {
  const [crop, setCrop] = useState("rice");
  const [soilType, setSoilType] = useState("loamy");
  const [soilPh, setSoilPh] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [organicMatter, setOrganicMatter] = useState("");
  const [area, setArea] = useState("");
  const [growthStage, setGrowthStage] = useState("sowing");
  const [previousFertilizer, setPreviousFertilizer] = useState("none");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<FertilizerRecommendation | null>(null);
  const [schedule, setSchedule] = useState<{ stage: string; time: string; fertilizer: string; amount: string }[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!crop || !soilType || !soilPh || !nitrogen || !phosphorus || !potassium || !area) {
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
      const mockRecommendation: FertilizerRecommendation = {
        name: "NPK 14-14-14 Complex Fertilizer",
        composition: "14% Nitrogen, 14% Phosphate, 14% Potash",
        application: "200 kg/ha split into 3 applications",
        amountPerHectare: "200 kg",
        timing: "First application at sowing, second at tillering, third at heading",
        method: "Broadcast application 5cm below soil surface",
        costEstimate: "$120-150 per hectare",
        benefits: [
          "Balanced nutrition for steady growth throughout season",
          "Improved yield by 15-20%",
          "Enhanced root development and drought resistance",
          "Improved grain quality and protein content"
        ],
        precautions: [
          "Avoid application before heavy rainfall",
          "Keep fertilizer away from direct seed contact",
          "Use protective equipment during application",
          "Follow recommended doses to avoid over-fertilization"
        ]
      };
      
      const mockSchedule = [
        { 
          stage: "Land preparation", 
          time: "1-2 weeks before sowing", 
          fertilizer: "Organic compost", 
          amount: "5 tons/ha" 
        },
        { 
          stage: "Sowing", 
          time: "At sowing", 
          fertilizer: "NPK 14-14-14", 
          amount: "70 kg/ha" 
        },
        { 
          stage: "Vegetative growth", 
          time: "30 days after sowing", 
          fertilizer: "NPK 14-14-14", 
          amount: "70 kg/ha" 
        },
        { 
          stage: "Reproductive stage", 
          time: "60 days after sowing", 
          fertilizer: "NPK 14-14-14", 
          amount: "60 kg/ha" 
        },
        { 
          stage: "Post-harvest", 
          time: "After harvesting", 
          fertilizer: "Green manure", 
          amount: "As available" 
        }
      ];
      
      setRecommendation(mockRecommendation);
      setSchedule(mockSchedule);
      
      toast({
        title: "Analysis complete",
        description: "Fertilizer recommendations are ready",
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
    setCrop("rice");
    setSoilType("loamy");
    setSoilPh("");
    setNitrogen("");
    setPhosphorus("");
    setPotassium("");
    setOrganicMatter("");
    setArea("");
    setGrowthStage("sowing");
    setPreviousFertilizer("none");
    setRecommendation(null);
    setSchedule([]);
  };

  return (
    <div className="space-y-6">
      <Card className="agro-card-shadow">
        <CardHeader>
          <CardTitle>Fertilizer Recommendation</CardTitle>
          <CardDescription>
            Get personalized fertilizer recommendations based on soil tests and crop requirements
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
              
              <div className="space-y-2">
                <Label htmlFor="soilPh">Soil pH</Label>
                <Input
                  id="soilPh"
                  type="number"
                  step="0.1"
                  placeholder="e.g. 6.5"
                  value={soilPh}
                  onChange={(e) => setSoilPh(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="nitrogen">Nitrogen Content (ppm)</Label>
                <Input
                  id="nitrogen"
                  type="number"
                  placeholder="e.g. 40"
                  value={nitrogen}
                  onChange={(e) => setNitrogen(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phosphorus">Phosphorus Content (ppm)</Label>
                <Input
                  id="phosphorus"
                  type="number"
                  placeholder="e.g. 35"
                  value={phosphorus}
                  onChange={(e) => setPhosphorus(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="potassium">Potassium Content (ppm)</Label>
                <Input
                  id="potassium"
                  type="number"
                  placeholder="e.g. 200"
                  value={potassium}
                  onChange={(e) => setPotassium(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="organicMatter">Organic Matter (%)</Label>
                <Input
                  id="organicMatter"
                  type="number"
                  step="0.1"
                  placeholder="e.g. 2.5"
                  value={organicMatter}
                  onChange={(e) => setOrganicMatter(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="area">Field Area (hectares)</Label>
                <Input
                  id="area"
                  type="number"
                  step="0.01"
                  placeholder="e.g. 5"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="growthStage">Current Growth Stage</Label>
                <Select value={growthStage} onValueChange={setGrowthStage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select growth stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sowing">Sowing/Planting</SelectItem>
                    <SelectItem value="vegetative">Vegetative Growth</SelectItem>
                    <SelectItem value="flowering">Flowering</SelectItem>
                    <SelectItem value="fruiting">Fruiting/Grain Filling</SelectItem>
                    <SelectItem value="maturity">Maturity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="previousFertilizer">Previous Fertilizer Used</Label>
                <Select value={previousFertilizer} onValueChange={setPreviousFertilizer}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select previous fertilizer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="npk">NPK Complex</SelectItem>
                    <SelectItem value="urea">Urea</SelectItem>
                    <SelectItem value="dap">DAP</SelectItem>
                    <SelectItem value="organic">Organic/Compost</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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
      
      {recommendation && (
        <Card className="agro-card-shadow">
          <CardHeader>
            <CardTitle>Fertilizer Recommendations</CardTitle>
            <CardDescription>For {crop.charAt(0).toUpperCase() + crop.slice(1)} on {soilType} soil</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Primary Recommendation</h3>
                    <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg">
                      <div className="flex items-center">
                        <div className="h-16 w-16 rounded-full bg-agro-light flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-primary">
                            <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 0 1-2 2Z" />
                            <path d="M6 3v10a2 2 0 0 0 2 2h12" />
                            <path d="M5 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-xl text-agro-dark">{recommendation.name}</h3>
                          <p className="text-sm text-muted-foreground">{recommendation.composition}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Recommended Application</Label>
                    <div className="font-medium">{recommendation.application}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Amount per Hectare</Label>
                    <div className="font-medium">{recommendation.amountPerHectare}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Total Required</Label>
                    <div className="font-medium">
                      {(parseFloat(recommendation.amountPerHectare) * parseFloat(area)).toFixed(1)} kg
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Timing of Application</Label>
                    <div className="font-medium">{recommendation.timing}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Application Method</Label>
                    <div className="font-medium">{recommendation.method}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Cost Estimate</Label>
                    <div className="font-medium">{recommendation.costEstimate}</div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="font-semibold text-lg mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {recommendation.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-agro-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-3">Precautions</h3>
                  <ul className="space-y-2">
                    {recommendation.precautions.map((precaution, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-2 flex-shrink-0">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span className="text-sm">{precaution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Application Schedule</h3>
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-3 top-3 w-0.5 h-[calc(100%-24px)] bg-gray-200"></div>
                  
                  <div className="space-y-6">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-agro-primary text-white z-10">
                          {index + 1}
                        </div>
                        <div className="flex-1 pl-2">
                          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <div className="font-medium">{item.stage}</div>
                            <div className="text-sm text-muted-foreground">{item.time}</div>
                            <div className="flex justify-between items-center mt-3">
                              <div>
                                <div className="text-sm font-medium">{item.fertilizer}</div>
                                <div className="text-xs text-muted-foreground">{item.amount}</div>
                              </div>
                              <Button variant="outline" size="sm" className="text-xs py-1 h-7 text-agro-primary border-agro-primary/50 hover:bg-agro-light/20">
                                Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <h3 className="font-medium flex items-center text-agro-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 mr-2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                    Additional Recommendations
                  </h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Consider supplementing with micronutrients - Zinc and Boron are low in your soil.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Your soil pH is slightly acidic. Consider adding agricultural lime at a rate of 1 ton/ha.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Increase organic matter content by incorporating crop residues or applying compost.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            Recommendations are based on soil test results, crop requirements, and local conditions.
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
