import axios from "axios";
import { BASE_URL } from "../../constants/config";

/**
 * Fetch ongoing appointments based on sabhaId and departmentId
 */
export const getOngoingAppointments = async (sabhaId, departmentId) => {
  try {
    const response = await axios.get(`${BASE_URL}/appointment/ongoing`, {
      params: { sabhaId, departmentId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching ongoing appointments:", error);
    throw error;
  }
};

/**
 * Fetch details of a specific ongoing appointment
 */
export const getOngoingAppointmentDetails = async (appointmentId) => {
  try {
    const response = await axios.get(`${BASE_URL}/appointment/ongoing/${appointmentId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching ongoing appointment details:", error);
    throw error;
  }
};

/**
 * Mark an ongoing appointment as completed
 */
export const completeOngoingAppointment = async (appointmentId) => {
  try {
    const response = await axios.put(`${BASE_URL}/appointment/ongoing/${appointmentId}/complete`);
    return response.data;
  } catch (error) {
    console.error("Error completing ongoing appointment:", error);
    throw error;
  }
};


export const cancelOngoingAppointment = async (appointmentId, cancelReason) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/appointment/ongoing/${appointmentId}/cancel`,
        { cancelReason }
      );
      return response.data;
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      throw error;
    }
  };