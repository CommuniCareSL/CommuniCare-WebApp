import axios from "axios";
import { BASE_URL } from "../../constants/config"; // Make sure this points to your base URL

export const fetchComplaints = async (sabhaId, departmentId) => {
  try {
    const response = await axios.get(`${BASE_URL}/complaint`, {
      params: { sabhaId, departmentId }
    });

    // Log the response for debugging
    console.log('Response data:', response.data);

    // Ensure the response has a `complaints` array
    if (!response.data || !Array.isArray(response.data.complaints)) {
      throw new Error('Invalid response format: Expected a complaints array');
    }

    // Return the complaints array
    return response.data.complaints;
  } catch (error) {
    console.error('Error fetching complaints:', error);
    throw error; // Throw the error to be handled by the caller
  }
};

export const fetchComplaintById = async (complaintId) => {
  try {
    const response = await axios.get(`${BASE_URL}/complaint/${complaintId}`);
    console.log('Complaint details:', response.data); // Log the response for debugging

    // Ensure the response has a `complaint` object
    if (!response.data || !response.data.complaint) {
      throw new Error('Invalid response format: Expected a complaint object');
    }

    // Return the complaint object
    return response.data.complaint;
  } catch (error) {
    console.error('Error fetching complaint details:', error);
    throw error; // Throw the error to be handled by the caller
  }
};

// Add a note to a complaint
export const addNoteToComplaint = async (complaintId, note) => {
  try {
    const response = await axios.post(`${BASE_URL}/complaint/${complaintId}/note`, {
      note,
    });
    return response.data; // Return the updated complaint or success message
  } catch (error) {
    console.error("Error adding note:", error);
    throw error;
  }
};

// Update a note in a complaint
export const updateNoteInComplaint = async (complaintId, note) => {
  try {
    const response = await axios.put(`${BASE_URL}/complaint/${complaintId}/note`, {
      note,
    });
    return response.data; // Return the updated complaint or success message
  } catch (error) {
    console.error("Error updating note:", error);
    throw error;
  }
};

