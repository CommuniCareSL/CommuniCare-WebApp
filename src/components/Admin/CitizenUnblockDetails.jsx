import React, { useEffect, useState } from "react";
import { fetchUserDetailsById } from "../../service/admin/User";
import profileImg from "../../assets/Admin/profile-img.jpg";
import "../../styles/components/Admin/CivilOfficerDetails.css";

function CitizenUnblockDetails({ userId }) {
  const [userDetails, setUserDetails] = useState(null);

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
          <button>
            <span className="material-symbols-outlined">block</span>Block
          </button>
        </div>
      </div>
    </div>
  );
}

export default CitizenUnblockDetails;
