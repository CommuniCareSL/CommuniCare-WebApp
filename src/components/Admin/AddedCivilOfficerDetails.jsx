import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchEmployeeById, updateEmployee } from '../../service/admin/Employee'; // Import service functions
import profileImg from '../../assets/Admin/profile-img.jpg';
import AlertService from '../../shared/service/AlertService';

function AddedCivilOfficerDetails() {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    nic: '',
    contactNo: '',
    address: '',
    email: '',
    password: '',
  });

  // Fetch employee details when the component mounts
  useEffect(() => {
    const loadEmployeeDetails = async () => {
      try {
        const response = await fetchEmployeeById(employeeId);
        setEmployee(response.data);
        setFormData({
          name: response.data.name,
          nic: response.data.nic,
          contactNo: response.data.contactNo,
          address: response.data.address,
          email: response.data.email,
          password: response.data.password,
        });
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    loadEmployeeDetails();
  }, [employeeId]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle edit/save button click
  const handleEditSave = async () => {
    if (isEditing) {
      // Save changes
      try {
        await updateEmployee(employeeId, formData);
        AlertService.success('Employee details updated successfully!');
        setIsEditing(false);
      } catch (error) {
        console.error('Error updating employee details:', error);
      }
    } else {
      // Enable editing
      setIsEditing(true);
    }
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="added-civil-officer-profile-details-personal-details">
      <div className="added-civil-officer-profile-details">
        <img src={profileImg} alt="Profile Image" />
        <p>Work ID: {employeeId}</p>
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
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{formData.name}</p>
                  )}
                </td>
              </tr>
              <tr className="added-civisl-officer-personal-detail-table-structure-column-1">
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-first-part">
                  <h4>NIC</h4>
                </td>
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-second-part">
                  {isEditing ? (
                    <input
                      type="text"
                      name="nic"
                      value={formData.nic}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{formData.nic}</p>
                  )}
                </td>
              </tr>
              <tr className="added-civisl-officer-personal-detail-table-structure-column-1">
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-first-part">
                  <h4>Contact Info</h4>
                </td>
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-second-part">
                  {isEditing ? (
                    <input
                      type="text"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{formData.contactNo}</p>
                  )}
                </td>
              </tr>
              <tr className="added-civisl-officer-personal-detail-table-structure-column-1">
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-first-part">
                  <h4>Address</h4>
                </td>
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-second-part">
                  {isEditing ? (
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{formData.address}</p>
                  )}
                </td>
              </tr>
              <tr className="added-civisl-officer-personal-detail-table-structure-column-1">
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-first-part">
                  <h4>Email</h4>
                </td>
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-second-part">
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{formData.email}</p>
                  )}
                </td>
              </tr>
              <tr className="added-civisl-officer-personal-detail-table-structure-column-1">
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-first-part">
                  <h4>Password</h4>
                </td>
                <td className="added-civisl-officer-personal-detail-table-structure-column-1-second-part">
                  {isEditing ? (
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>********</p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="added-civisl-officer-personal-detail-edit-delete">
          <button onClick={handleEditSave}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button>
            <span className="material-symbols-outlined">delete</span> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddedCivilOfficerDetails;