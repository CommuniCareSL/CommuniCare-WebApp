import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserDetailsById, blockUser } from "../../service/admin/User"; // Import blockUser function
import profileImg from "../../assets/Admin/profile-img.jpg";
import "../../styles/components/Admin/CivilOfficerDetails.css";
import AlertService from "../../shared/service/AlertService";

function CitizenUnblockDetails({ userId }) {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  console.log("User ID in CitizenUnblockDetails:", userId);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const data = await fetchUserDetailsById(userId);
        console.log("User details:", data);
        setUserDetails(data);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    if (userId) {
      fetchUserDetails();
    } else {
      console.error("userId is undefined or null");
    }
  }, [userId]);

  // Handle block button click
  const handleBlockClick = async () => {
    const result = await AlertService.confirm({
      title: "Block User",
      text: "Are you sure you want to block this user?",
      confirmButtonText: "Yes, Block",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        // Call the backend API to block the user
        await blockUser(userId, true); // Pass userId and isBlock=true
        AlertService.success("User blocked successfully!");
        navigate("/AdminViewCitizen");
        // Optionally, refetch user details to update the UI
        //const updatedUserDetails = await fetchUserDetailsById(userId);
        //setUserDetails(updatedUserDetails);
      } catch (error) {
        console.error("Failed to block user:", error);
        AlertService.error("Failed to block user. Please try again.");
      }
    }
  };

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="added-civil-officer-profile-details-personal-details">
      <div className="added-civil-officer-profile-details">
        <img src={profileImg} alt="Profile Image" />
        <h4>{userDetails.fullName}</h4>
        <p>{userDetails.userId}</p>{" "}
      </div>

      <div className="added-civisl-officer-personal-detail">
        <div className="added-civisl-officer-personal-detail-table-structure">
          <table>
            <tbody>
              <tr className="added-civisl-officer-personal-detail-table-structure-column-1">
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-first-part">
                  <h4>Name</h4>
                </td>
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-second-part">
                  <p>{userDetails.fullName}</p>
                </td>
              </tr>
              <tr className="added-civisl-officer-personal-detail-table-structure-column-1">
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-first-part">
                  <h4>NIC</h4>
                </td>
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-second-part">
                  <p>{userDetails.idNumber}</p>{" "}
                </td>
              </tr>
              <tr className="added-civisl-officer-personal-detail-table-structure-column-1">
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-first-part">
                  <h4>Contact Info</h4>
                </td>
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-second-part">
                  <p>{userDetails.phoneNumber}</p>
                </td>
              </tr>
              <tr className="added-civisl-officer-personal-detail-table-structure-column-1">
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-first-part">
                  <h4>Email</h4>
                </td>
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-second-part">
                  <p>{userDetails.email}</p>
                </td>
              </tr>
              <tr className="added-civisl-officer-personal-detail-table-structure-column-1">
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-first-part">
                  <h4>Address</h4>
                </td>
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-second-part">
                  <p>{userDetails.district}</p>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="added-civisl-officer-personal-detail-edit-delete">
          <button onClick={handleBlockClick}>
            <span className="material-symbols-outlined">block</span>Block
          </button>
        </div>
      </div>
    </div>
  );
}

export default CitizenUnblockDetails;