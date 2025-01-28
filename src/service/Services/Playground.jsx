import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const fetchSavedGrounds = async (sabhaId) => {
    try {
        const response = await axios.get(`${BASE_URL}/ground/sabha/${sabhaId}`);

        console.log('Response data:', response.data);

        
        if (!response.data || !Array.isArray(response.data)) {
            throw new Error('Invalid response format: Expected an array of grounds'); // Updated error message
        }

        // Return the grounds array
        return response.data; 
    } catch (error) {
        console.error('Error fetching saved Playgrounds:', error);
        throw error; // Throw the error to be handled by the caller
    }
};