
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import YieldInputForm from "./YieldInputForm";
import YieldPredictionResults from "./YieldPredictionResults";

export interface PredictionResult {
  crop: string;
  predictedYield: number;
  confidenceLevel: number;
  unit: string;
  historicalAverage: number;
  potentialRange: [number, number];
}

export interface FormData {
  crop: string;
  area: string;
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  ph: string;
  rainfall: string;
  irrigation: string;
  pesticide: string;
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
  const [formData, setFormData] = useState<FormData>({
    crop: "rice",
    area: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    ph: "",
    rainfall: "",
    irrigation: "",
    pesticide: "low"
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [chartData, setChartData] = useState(historicalData);
  const { toast } = useToast();

  const handleFormChange = (key: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields are filled
    const { crop, area, nitrogen, phosphorus, potassium, ph, rainfall, irrigation } = formData;
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
      // In a real implementation, this would be a call to your Supabase Edge Function
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock data - in a real app, this would come from the ML service through Supabase
      const mockResult: PredictionResult = {
        crop: formData.crop.charAt(0).toUpperCase() + formData.crop.slice(1),
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
    setFormData({
      crop: "rice",
      area: "",
      nitrogen: "",
      phosphorus: "",
      potassium: "",
      ph: "",
      rainfall: "",
      irrigation: "",
      pesticide: "low"
    });
    setResult(null);
    setChartData(historicalData);
  };

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
          <YieldInputForm 
            formData={formData}
            onChange={handleFormChange}
            onSubmit={handleSubmit}
            onReset={handleReset}
            isLoading={isLoading}
          />
        </CardContent>
      </Card>
      
      {result && (
        <YieldPredictionResults 
          result={result} 
          chartData={chartData} 
          area={formData.area} 
        />
      )}
    </div>
  );
}
