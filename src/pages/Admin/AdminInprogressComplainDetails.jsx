import React from 'react';
import Sidebar from '../../components/Admin/Sidebar';

import '../../styles/pages/Admin/AdminUnseenComplaintDetails.css';

import UnseenComplaintsDetails from '../../components/Admin/UnseenComplaintsDetails';

function AdminInprogressComplainDetails() {
    return (
        <div>
          <Sidebar />
    
          <div className="admin-unseen-complaints-details-home-page">
            <div className="unseen-complaint-title-container">
              <h3>Unseen Complaints</h3>
            </div>
    
            <div className="admin-unseen-complain-details-panel">
              <div className="admin-unseen-complain-detailed-panel-title">
                <h3>Complaint Category Name</h3>
              </div>
    
              <div style={{borderBottom: '2px solid #0991FF'}}></div>
    
              <UnseenComplaintsDetails />
    
              <div className="unseen-complaints-contractor-details">
    
                <div className="unseen-complaints-contractor-details-first-div">
    
                  <table>
                    <tbody>
                      <tr className='unseen-complaints-citizen-form-details-first-part' style={{border: 'none'}}>
                        <td className='citizen-form-details-first-column'><h4>Contractor Details</h4></td>
                        <td className='citizen-form-details-second-column'>
                          <p>Contractor name</p>
                          <p>contact info</p>
                          <p>email-address</p>
                          <p>whatsapp number</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
    
                </div>
    
                {/* <div className="unseen-complaints-contractor-details-second-div">
                  <button style={{marginRight: '30px'}}>Send Message</button>
                </div> */}
                
                <div className="Complaint-uploaded-image-slider-view-buttons">
                  {/* <button><span class="material-symbols-outlined">visibility</span> View</button> */}
                  <button><span class="material-symbols-outlined">task_alt</span> Done</button>
                </div>
    
              </div>
    
              <div className="extra-div-for-style"></div>
    
            </div>
    
          </div>
    
        </div>
      )
}

export default AdminInprogressComplainDetails
