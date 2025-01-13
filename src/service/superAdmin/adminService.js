import axios from 'axios';
import { BASE_URL } from "../../constants/config";

export const getAllAdmins = async (departmentId) => {
  try {
    const response = await axios.get(`${BASE_URL}/employee/admins`, {
      params: { departmentId }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching admins:', error);
    throw error;
  }
};

// New function to fetch admin details by employeeId
export const getAdminById = async (employeeId) => {
    try {
      const response = await axios.get(`${BASE_URL}/employee/admin/${employeeId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching admin details:', error);
      throw error;
    }
  };

// Fetch sabhas for a specific district
export const fetchSabhas = async (district) => {
  try {
    const response = await axios.get(`${BASE_URL}/sabha/forDistrict`, {
      params: { district },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sabhas:', error);
    throw error;
  }
};

export const addAdmin = async (adminData) => {
  try {
    const response = await axios.post(`${BASE_URL}/employee`, adminData);
    return response.data;
  } catch (error) {
    console.error('Error adding admin:', error);
    throw error;
  }
};

export const updateAdmin = async (adminData) => {
  try {
    const response = await axios.put(`${BASE_URL}/employee/${adminData.index}`, adminData);
    return response.data;
  } catch (error) {
    console.error('Error updating admin:', error);
    throw error;
  }
};