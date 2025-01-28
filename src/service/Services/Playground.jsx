import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const fetchSavedGrounds = async (sabhaId) => {
    try {
      const response = await axios.get(`${BASE_URL}/ground/${sabhaId}`);
  
      // Log the response for debugging
      console.log('Response data:', response.data);
  
      // Ensure the response has a `complaints` array
      if (!response.data || !Array.isArray(response.data.grounds)) {
        throw new Error('Invalid response format: Expected a playground array');
      }
  
      // Return the complaints array
      return response.data.grounds;
    } catch (error) {
      console.error('Error fetching saved Playgrounds:', error);
      throw error; // Throw the error to be handled by the caller
    }
  };