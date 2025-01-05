import axios from "axios";

class EmployeeService {
    static async getProfile(token) {
        console.log("Fetching profile with token:", token); // Log token for debugging
        try {
            const response = await axios.get("http://localhost:8080/officer/profile", {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log("Profile data:", response.data); // Log response for debugging
            return response.data;
        } catch (err) {
            console.error('Error fetching profile:', err); // Log error details
            throw err;
        }
    }
}

export default EmployeeService;
