import axios from "axios";
import { BASE_URL } from "../../constants/config";

// Fetch all canceled or completed appointments
export const fetchCanceledOrCompletedAppointments = async (sabhaId, departmentId) => {
    try {
      const response = await axios.get(`${BASE_URL}/appointment/canceled-or-completed`, {
        params: {
          sabhaId,
          departmentId,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch appointments.");
    }
  };

// Fetch details of a specific appointment by ID
export const fetchAppointmentDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/appointment/canceled-or-completed/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch appointment details.");
  }
};