import axios from "axios";
import { BASE_URL } from "../../../constants/config";


export const fetchSavedCrematorium = async (sabhaId) => {
    try {
        const response = await axios.get(`${BASE_URL}/crematorium/sabha/${sabhaId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching crematoriums:', error);
        throw error;
    }
};


export const addCrematorium = async (crematoriumData) => {
    try {
        const response = await axios.post(`${BASE_URL}/crematorium`, crematoriumData);
        return response.data;
    } catch (error) {
        console.error('Error adding crematorium:', error);
        throw error;
    }
};


export const editCrematorium = async (crematoriumId,crematoriumData) => {
    try {
        const response = await axios.put(`${BASE_URL}/crematorium/${crematoriumId}`, crematoriumData);
        return response.data;
    } catch (error) {
        console.error('Error updating crematorium:', error);
        throw error;
    }
};

export const deleteCrematorium = async (crematoriumId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/crematorium/${crematoriumId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting crematorium:', error);
        throw error;
    }
};