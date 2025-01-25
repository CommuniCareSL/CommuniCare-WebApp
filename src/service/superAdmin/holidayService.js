import { BASE_URL } from "../../constants/config";

export const holidayService = {
  getAllHolidays: async () => {
    try {
      const response = await fetch(`${BASE_URL}/holiday`);
      return await response.json(); // This should return an array of date strings
    } catch (error) {
      console.error('Error fetching holidays:', error);
      throw error;
    }
  },

  addHoliday: async (date, reason) => {
    try {
      const response = await fetch(`${BASE_URL}/holiday`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, reason }),
      });
      return await response.json();
    } catch (error) {
      console.error('Error adding holiday:', error);
      throw error;
    }
  },
};