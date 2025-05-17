
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import YieldChart from "./YieldChart";
import ConfidenceChart from "./ConfidenceChart";
import { PredictionResult } from "./YieldPredictionForm";

interface YieldPredictionResultsProps {
  result: PredictionResult;
  chartData: Array<{ year: string; yield: number }>;
  area: string;
}

export default function YieldPredictionResults({ 
  result, 
  chartData,
  area
}: YieldPredictionResultsProps) {
  return (
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
              <ConfidenceChart confidenceLevel={result.confidenceLevel} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Historical Comparison</h3>
            <YieldChart chartData={chartData} />
            
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
  );
}
