import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const fetchUsersBySabhaAndBlockStatus = async (sabhaId, isBlock) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/filter`, {
      sabhaId,
      isBlock,
    });
    return response.data; // Returns the array of user objects
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Fetch user details by userId
export const fetchUserDetailsById = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}`);
    return response.data; // Returns the user object
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
