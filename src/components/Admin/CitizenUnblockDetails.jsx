import React from 'react';

import profileImg from '../../assets/Admin/profile-img.jpg';

function CitizenUnblockDetails() {
  return (
    <div className="added-civil-officer-profile-details-personal-details">

      <div className="added-civil-officer-profile-details">
        <img src={profileImg} alt="Profile Image" />
        <h4>User name</h4>
        <p>user's regional office</p>
      </div>

      <div className="added-civisl-officer-personal-detail">
        <div className="added-civisl-officer-personal-detail-table-structure">

          <table>
            <tbody>
              <tr className='added-civisl-officer-personal-detail-table-structure-column-1'>
                <td className='added-civisl-officer-personal-detail-table-structure-column-1-first-part'><h4>Name</h4></td>
                <td className='added-civisl-officer-personal-detail-table-structure-column-1-second-part'><p>Dasun Kariyawasam</p></td>
              </tr>
              <tr className='added-civisl-officer-personal-detail-table-structure-column-1'>
                <td className='added-civisl-officer-personal-detail-table-structure-column-1-first-part'><h4>NIC</h4></td>
                <td className='added-civisl-officer-personal-detail-table-structure-column-1-second-part'><p>1234567890</p></td>
              </tr>
              <tr className='added-civisl-officer-personal-detail-table-structure-column-1'>
                <td className='added-civisl-officer-personal-detail-table-structure-column-1-first-part'><h4>Contact Info</h4></td>
                <td className='added-civisl-officer-personal-detail-table-structure-column-1-second-part'><p>0777123456</p></td>
              </tr>
              <tr className='added-civisl-officer-personal-detail-table-structure-column-1'>
                <td className='added-civisl-officer-personal-detail-table-structure-column-1-first-part'><h4>Address</h4></td>
                <td className='added-civisl-officer-personal-detail-table-structure-column-1-second-part'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Explicabo nihil dolorum quam ratione.</p>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="added-civisl-officer-personal-detail-edit-delete">
          <button><span class="material-symbols-outlined">block</span>Block</button>
        </div>
      </div>

    </div>
  )
}

export default CitizenUnblockDetails
