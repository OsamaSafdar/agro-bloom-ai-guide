
import { FormData, PredictionResult } from "@/components/features/yield-prediction/YieldPredictionForm";
import { supabase } from "./supabase"; // Assuming you have a supabase.ts file for client initialization

/**
 * Service to handle ML predictions through Supabase Edge Functions
 */
export const mlPredictionService = {
  /**
   * Predict crop yield based on provided form data
   */
  predictYield: async (formData: FormData): Promise<PredictionResult> => {
    try {
      // Call Supabase Edge Function for yield prediction
      const { data, error } = await supabase.functions.invoke('predict-yield', {
        body: formData
      });
      
      if (error) throw new Error(error.message);
      
      return data as PredictionResult;
    } catch (error) {
      console.error('Error predicting yield:', error);
      throw error;
    }
  },
  
  /**
   * Get historical yield data for a specific crop
   */
  getHistoricalData: async (crop: string): Promise<Array<{year: string, yield: number}>> => {
    try {
      // Query Supabase database for historical data
      const { data, error } = await supabase
        .from('historical_yields')
        .select('year, yield')
        .eq('crop', crop)
        .order('year', { ascending: true });
        
      if (error) throw new Error(error.message);
      
      return data || [];
    } catch (error) {
      console.error('Error fetching historical data:', error);
      throw error;
    }
  }
};
