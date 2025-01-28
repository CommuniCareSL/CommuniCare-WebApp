import axios from "axios";
import { BASE_URL } from "../../../constants/config";

// Fetch grounds by Sabha ID
export const fetchSavedGrounds = async (sabhaId) => {
    try {
        const response = await axios.get(`${BASE_URL}/ground/sabha/${sabhaId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching grounds:', error);
        throw error;
    }
};

// Add new ground
export const addGround = async (groundData) => {
    try {
        const response = await axios.post(`${BASE_URL}/ground`, groundData);
        return response.data;
    } catch (error) {
        console.error('Error adding ground:', error);
        throw error;
    }
};

// Edit ground
export const editGround = async (groundId, groundData) => {
    try {
        const response = await axios.put(`${BASE_URL}/ground/${groundId}`, groundData);
        return response.data;
    } catch (error) {
        console.error('Error updating ground:', error);
        throw error;
    }
};

// Delete ground
export const deleteGround = async (groundId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/ground/${groundId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting ground:', error);
        throw error;
    }
};