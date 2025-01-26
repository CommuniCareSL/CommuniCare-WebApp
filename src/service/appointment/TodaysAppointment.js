import axios from "axios";
import { BASE_URL } from "../../constants/config";

/**
 * Fetch appointments based on sabhaId and departmentId
 */
export const getTodayAppointments = async (sabhaId, departmentId) => {
  try {
    const response = await axios.get(`${BASE_URL}/appointment/today`, {
      params: { sabhaId, departmentId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
};

  export const getTodayAppointmentDetails = async (appointmentId) => {
    try {
      const response = await axios.get(`${BASE_URL}/appointment/today/${appointmentId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching appointment details:', error);
      throw error;
    }
  };

  export const cancelTodayAppointment = async (appointmentId, cancelReason) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/appointment/today/${appointmentId}/cancel`,
        { cancelReason }
      );
      return response.data;
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      throw error;
    }
  };

/**
 * Start an appointment by appointmentId
 */
export const startAppointment = async (appointmentId) => {
  try {
    const response = await axios.put(`${BASE_URL}/appointment/today/${appointmentId}/start`);
    return response.data;
  } catch (error) {
    console.error("Error starting appointment:", error);
    throw error;
  }
};