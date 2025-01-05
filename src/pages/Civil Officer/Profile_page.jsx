import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Civil Officer/Sidebar';

const App = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            // Redirect to login page
            window.location.href = '/login';
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/officer/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfile(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-grow p-6 space-y-6 overflow-y-auto">
                {/* <h1 className="text-3xl font-bold text-gray-700">Officer Profile Viewer</h1> */}

                {loading && (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}

                {error && (
                    <p className="text-red-600 text-lg font-medium">Error loading profile: {error.message}</p>
                )}

                {profile ? (
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
                            Officer Details
                        </h2>
                        <div className="space-y-4">
                            {/* <ProfileDetail label="Employee ID" value={profile.employeeId} /> */}
                            <ProfileDetail label="Regional Office" value={profile.sabahaName} />
                            <ProfileDetail label="Department" value={profile.department} />
                            <ProfileDetail label="District" value={profile.district} />
                            <ProfileDetail label="Email" value={profile.email} />
                            <ProfileDetail label="Address" value={profile.address} />
                            <ProfileDetail label="NIC" value={profile.nic} />
                           
                            {/* <ProfileDetail label="Sabaha" value={profile.sabaha} /> */}
                            
                            <ProfileDetail label="Name" value={profile.name} />
                            <ProfileDetail label="Role" value={profile.role} />
                            
                            {/* <ProfileDetail
                                label="Sabha Department ID"
                                value={profile.sabhaDepartmentId}
                            /> */}
                        </div>
                    </div>
                ) : (
                    !loading && <p className="text-gray-500 text-lg">No profile found.</p>
                )}
            </div>
        </div>
    );
};

// Component to render individual profile details
const ProfileDetail = ({ label, value }) => (
    <div className="p-4 bg-gray-50 border rounded-md shadow-sm">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-medium text-gray-700">{value || 'N/A'}</p>
    </div>
);

export default App;
