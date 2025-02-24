import axios from "axios";
import { BASE_URL } from "../../constants/config";

// Function to register a new employee
export const registerEmployee = async (employeeData, token) => {
  try {
      const response = await axios.post(`${BASE_URL}/employee/register`, employeeData, {
          headers: {
              Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
      });
      return response.data; // Return the response data
  } catch (error) {
      console.error('Error registering employee:', error);
      throw error; // Throw error for handling in the component
  }
};


// Function to fetch employees by sabhaId
export const fetchEmployeesBySabhaId = async (sabhaId) => {
  try {
    const response = await axios.get(`${BASE_URL}/employee/bySabha`, {
      params: {
        sabhaId: sabhaId,
      },
    });
    return response; // Return the response data
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error; // Throw error for handling in the component
  }
};

// Fetch employee details by ID
export const fetchEmployeeById = async (employeeId) => {
    try {
      const response = await axios.get(`${BASE_URL}/employee/${employeeId}`);
      return response;
    } catch (error) {
      console.error('Error fetching employee details:', error);
      throw error;
    }
  };
  
  // Update employee details
  export const updateEmployee = async (employeeId, updatedData) => {
    try {
      const response = await axios.put(`${BASE_URL}/employee/${employeeId}`, updatedData);
      return response;
    } catch (error) {
      console.error('Error updating employee details:', error);
      throw error;
    }
  };