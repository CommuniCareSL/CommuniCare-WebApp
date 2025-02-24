import axios from "axios";
import { BASE_URL} from "../constants/config";

class UserService{

    static async login(email, password){
        try{
            const response = await axios.post(`${BASE_URL}/employee/login`, {email, password})
            return response.data;

        }catch(err){
            throw err;
        }
    }

    static async register(userData, token){
        try{
            const response = await axios.post(`${BASE_URL}/auth/register`, userData, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getAllUsers(token){
        try{
            const response = await axios.get(`${BASE_URL}/admin/get-all-users`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async getYourProfile(token){
        try{
            const response = await axios.get(`${BASE_URL}/adminuser/get-profile`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getUserById(userId, token){
        try{
            const response = await axios.get(`${BASE_URL}/admin/get-users/${userId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getOfficers(token){
        try{
            const response = await axios.get(`${BASE_URL}/adminuser/get-officers`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        }catch(err){
            throw err;
        }
    };
    
    static async getOfficersWithDepartment(token){
        try{
            const response = await axios.get(`${BASE_URL}/admin/get-officers-with-department`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        }catch(err){
            throw err;
        }
    };

    static async getComplaintsWithStatusZero(token){
        try{
            const response = await axios.get(`${BASE_URL}/app/api/user/complaints/status/0`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        }catch(err){
            throw err;
        }
    };


    static async deleteUser(userId, token){
        try{
            const response = await axios.delete(`${BASE_URL}/admin/delete/${userId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async updateUser(userId, userData, token){
        try{
            const response = await axios.put(`${BASE_URL}/admin/update/${userId}`, userData,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    /**AUTHENTICATION CHECKER */
    static logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }

    static isAdmin(){
        const role = localStorage.getItem('role')
        return role === 'ADMIN'
    }

    static isUser(){
        const role = localStorage.getItem('role')
        return role === 'USER'
    }

    static adminOnly(){
        return this.isAuthenticated() && this.isAdmin();
    }

}

export default UserService;