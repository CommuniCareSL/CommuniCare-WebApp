import React from 'react';

import profileImg from '../../assets/Admin/profile-img.jpg';

import UploadPhotosSlider from './UploadPhotosSlider';

function ComplaintsDetails() {
  return (
    <div className='unseen-complaints-details-divs'>

      <div className="unseen-complaints-profile-details">
        <img src={profileImg} alt="Profile Image" />
        <h4>Citizen User name</h4>
      </div>

      <div className="unseen-complaints-citizen-form-details">
        <table>
          <tbody>
            <tr className='unseen-complaints-citizen-form-details-first-part'>
              <td className='citizen-form-details-first-column'><h4>Name</h4></td>
              <td className='citizen-form-details-second-column'><p>Dinuka</p></td>
            </tr>
            <tr className='unseen-complaints-citizen-form-details-first-part'>
              <td className='citizen-form-details-first-column'><h4>Address</h4></td>
              <td className='citizen-form-details-second-column'><p>Colombo 4</p></td>
            </tr>
            <tr className='unseen-complaints-citizen-form-details-first-part'>
              <td className='citizen-form-details-first-column'><h4>Contact Info</h4></td>
              <td className='citizen-form-details-second-column'><p>0777123456</p></td>
            </tr>
            <tr className='unseen-complaints-citizen-form-details-Second-part'>
              <td className='citizen-form-details-first-column-first-part'><h4>Description</h4></td>
              <td className='citizen-form-details-second-column-second-part'>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa quasi fugiat libero dicta exercitationem iure vero ratione 
                tempore minus voluptates, praesentium dolores sit laboriosam, eum maiores 
                repudiandae. Non, velit impedit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa quasi fugiat libero dicta exercitationem iure vero ratione 
                tempore minus voluptates, praesentium dolores sit laboriosam, eum maiores 
                repudiandae. Non, velit impedit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa quasi fugiat libero dicta exercitationem iure vero ratione 
                tempore minus voluptates
                repudiandae. Non, velit impedit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa quasi fugiat libero dicta exercitationem iure vero ratione 
                tempore minus voluptates
                repudiandae. Non, velit impedit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa quasi fugiat libero dicta exercitationem iure vero ratione 
                tempore minus voluptates
                repudiandae. Non, velit impedit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa quasi fugiat libero dicta exercitationem iure vero ratione 
                tempore minus voluptates
                repudiandae. Non, velit impedit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa quasi fugiat libero dicta exercitationem iure vero ratione 
                tempore minus voluptates
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="unseen-complaints-uploaded-images">
        <UploadPhotosSlider />
      </div>
      
    </div>
  )
}

export default ComplaintsDetails
