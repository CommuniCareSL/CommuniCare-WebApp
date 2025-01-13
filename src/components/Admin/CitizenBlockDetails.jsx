import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserDetailsById, blockUser } from "../../service/admin/User";
import profileImg from "../../assets/Admin/profile-img.jpg";
import "../../styles/components/Admin/CivilOfficerDetails.css";
import AlertService from "../../shared/service/AlertService";

function CitizenBlockDetails({ userId }) {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  console.log("User ID in CitizenBlockDetails:", userId);

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
        text: "Are you sure you want to unblock this user?",
        confirmButtonText: "Yes, Unblock",
        cancelButtonText: "Cancel",
      });
  
      if (result.isConfirmed) {
        try {
          // Call the backend API to block the user
          await blockUser(userId, false); // Pass userId and isBlock=true
          AlertService.success("User unblocked successfully!");
          navigate("/AdminViewCitizen");
          // Optionally, refetch user details to update the UI
          //const updatedUserDetails = await fetchUserDetailsById(userId);
          //setUserDetails(updatedUserDetails);
        } catch (error) {
          console.error("Failed to unblock user:", error);
          AlertService.error("Failed to unblock user. Please try again.");
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
                  {/* Replace with the correct field from your backend */}
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
                  {/* Replace with the correct field from your backend */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="added-civisl-officer-personal-detail-edit-delete">
          <button onClick={handleBlockClick} style={{width: '100px'}}><span class="material-symbols-outlined">radio_button_unchecked</span>Unblock</button>
          <button><span class="material-symbols-outlined">delete</span> Delete</button> 
        </div>
      </div>
    </div>
  );
}

export default CitizenBlockDetails;
