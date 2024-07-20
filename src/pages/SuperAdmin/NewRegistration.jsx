// import React from 'react'
import '../../styles/pages/SuperAdmin/NewRegistration.css';
import 'boxicons/css/boxicons.min.css';
import Sidebar from '../../components/SuperAdmin/Sidebar';


// export const a = () => {
//   console.log('9090909')
// }

export const Newregistration = () => {
  return (
    <div>
    <Sidebar />
    <div className="registration-content">
      {/* <h2 className="title">New Registration</h2> */}
      <div className="table-container">
        <table className="registration-table">
          <thead>
            <tr>
              <th>Index</th>
              <th>District</th>
              <th>Pradeshiya Sabha</th>
              <th>View Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>District A</td>
              <td>Suburb X</td>
              <td><button className="view-btn">View</button></td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>District B</td>
              <td>Suburb Y</td>
              <td><button className="view-btn">View</button></td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>District C</td>
              <td>Suburb Z</td>
              <td><button className="view-btn">View</button></td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>District D</td>
              <td>Suburb W</td>
              <td><button className="view-btn">View</button></td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>District E</td>
              <td>Suburb V</td>
              <td><button className="view-btn">View</button></td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>District D</td>
              <td>Suburb W</td>
              <td><button className="view-btn">View</button></td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>District D</td>
              <td>Suburb W</td>
              <td><button className="view-btn">View</button></td>
              <td>
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}


// const b = () => {
//   console.log('----------------')
// }

// export default b;