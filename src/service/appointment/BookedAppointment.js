import axios from "axios";
import { BASE_URL } from "../../constants/config";

export const getAppointments = async (sabhaId, departmentId) => {
    try {
      const response = await axios.get(`${BASE_URL}/appointment`, {
        params: { sabhaId, departmentId }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw error;
    }
  };
  
  export const getAppointmentDetails = async (appointmentId) => {
    try {
      const response = await axios.get(`${BASE_URL}/appointment/${appointmentId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching appointment details:', error);
      throw error;
    }
  };

  export const cancelAppointment = async (appointmentId, cancelReason) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/appointment/${appointmentId}/cancel`,
        { cancelReason }
      );
      return response.data;
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      throw error;
    }
  };