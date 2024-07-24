import Sidebar from '../../components/SuperAdmin/Sidebar';
import '../../styles/pages/SuperAdmin/Registered.css'


const Registered = () => {
  return (
    <div className="new-registration-page">
      <Sidebar />
      <div className="registration-content">
        <div className="table-container">
          <table className="registration-table">
            <thead>
              <tr>
                <th>Index</th>
                <th>District</th>
                <th>Pradeshiya Sabha</th>
                <th>View Details</th>
                <th style={{paddingLeft:'65px'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>District A</td>
                <td>Suburb X</td>
                <td><button className="view-btn">View</button></td>
                <td>
                  <div className="action-buttons">
                    <button className="accept-btn">Accept</button>
                    <button className="reject-btn">Reject</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>District B</td>
                <td>Suburb Y</td>
                <td><button className="view-btn">View</button></td>
                <td>
                  <div className="action-buttons">
                    <button className="accept-btn">Accept</button>
                    <button className="reject-btn">Reject</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>District C</td>
                <td>Suburb Z</td>
                <td><button className="view-btn">View</button></td>
                <td>
                  <div className="action-buttons">
                    <button className="accept-btn">Accept</button>
                    <button className="reject-btn">Reject</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>District D</td>
                <td>Suburb W</td>
                <td><button className="view-btn">View</button></td>
                <td>
                  <div className="action-buttons">
                    <button className="accept-btn">Accept</button>
                    <button className="reject-btn">Reject</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>District A</td>
                <td>Suburb X</td>
                <td><button className="view-btn">View</button></td>
                <td>
                  <div className="action-buttons">
                    <button className="accept-btn">Accept</button>
                    <button className="reject-btn">Reject</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>District B</td>
                <td>Suburb Y</td>
                <td><button className="view-btn">View</button></td>
                <td>
                  <div className="action-buttons">
                    <button className="accept-btn">Accept</button>
                    <button className="reject-btn">Reject</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>District C</td>
                <td>Suburb Z</td>
                <td><button className="view-btn">View</button></td>
                <td>
                  <div className="action-buttons">
                    <button className="accept-btn">Accept</button>
                    <button className="reject-btn">Reject</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>District D</td>
                <td>Suburb W</td>
                <td><button className="view-btn">View</button></td>
                <td>
                  <div className="action-buttons">
                    <button className="accept-btn">Accept</button>
                    <button className="reject-btn">Reject</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Registered;