
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { FormData } from "./YieldPredictionForm";

interface YieldInputFormProps {
  formData: FormData;
  onChange: (key: keyof FormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
  isLoading: boolean;
}

export default function YieldInputForm({ 
  formData, 
  onChange, 
  onSubmit, 
  onReset, 
  isLoading 
}: YieldInputFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="crop">Crop Type</Label>
          <Select 
            value={formData.crop} 
            onValueChange={value => onChange("crop", value)}
          >
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
            value={formData.area}
            onChange={e => onChange("area", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nitrogen">Nitrogen (N) in kg/ha</Label>
          <Input
            id="nitrogen"
            type="number"
            placeholder="e.g. 90"
            value={formData.nitrogen}
            onChange={e => onChange("nitrogen", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phosphorus">Phosphorus (P) in kg/ha</Label>
          <Input
            id="phosphorus"
            type="number"
            placeholder="e.g. 45"
            value={formData.phosphorus}
            onChange={e => onChange("phosphorus", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="potassium">Potassium (K) in kg/ha</Label>
          <Input
            id="potassium"
            type="number"
            placeholder="e.g. 40"
            value={formData.potassium}
            onChange={e => onChange("potassium", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ph">pH Value</Label>
          <Input
            id="ph"
            type="number"
            step="0.1"
            placeholder="e.g. 6.5"
            value={formData.ph}
            onChange={e => onChange("ph", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rainfall">Rainfall (mm)</Label>
          <Input
            id="rainfall"
            type="number"
            placeholder="e.g. 200"
            value={formData.rainfall}
            onChange={e => onChange("rainfall", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="irrigation">Irrigation (mm)</Label>
          <Input
            id="irrigation"
            type="number"
            placeholder="e.g. 80"
            value={formData.irrigation}
            onChange={e => onChange("irrigation", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pesticide">Pesticide Use</Label>
          <Select 
            value={formData.pesticide} 
            onValueChange={value => onChange("pesticide", value)}
          >
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
        <Button variant="outline" onClick={onReset} type="button">Reset</Button>
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
  );
}
