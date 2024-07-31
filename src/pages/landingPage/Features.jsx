// import React from 'react';
import '../../styles/pages/landingPage/Features.css';

const Features = () => {
  return (
    <div className="features-container" style={{ paddingTop: "120px" }}>
      <div className="row">
        <div className="col-md-4 col-sm-6 content-card">
          <div className="card-big-shadow">
            <div
              className="card card-just-text"
              data-background="color"
              data-color="blue"
              data-radius="none"
            >
              <div className="content">
                <h6 className="category">Dashboard Access</h6>
                <p className="description">
                  View all your interactions, updates, and appointments in one easy-to-access dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 content-card">
          <div className="card-big-shadow">
            <div
              className="card card-just-text"
              data-background="color"
              data-color="green"
              data-radius="none"
            >
              <div className="content">
                <h6 className="category">Language Support</h6>
                <p className="description">
                  Communicate in your preferred language with support for both Sinhala and English.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 content-card">
          <div className="card-big-shadow">
            <div
              className="card card-just-text"
              data-background="color"
              data-color="yellow"
              data-radius="none"
            >
              <div className="content">
                <h6 className="category">Custom Notifications</h6>
                <p className="description">
                  Receive customized notifications about the status of your complaints and appointments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 content-card">
          <div className="card-big-shadow">
            <div
              className="card card-just-text"
              data-background="color"
              data-color="brown"
              data-radius="none"
            >
              <div className="content">
                <h6 className="category">Service Directory</h6>
                <p className="description">
                  Quickly find and access the services you need, with detailed information and easy navigation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 content-card">
          <div className="card-big-shadow">
            <div
              className="card card-just-text"
              data-background="color"
              data-color="purple"
              data-radius="none"
            >
              <div className="content">
                <h6 className="category">Resource Management</h6>
                <p className="description">
                  Streamline the allocation of government resources to ensure quick and effective responses to public needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 content-card">
          <div className="card-big-shadow">
            <div
              className="card card-just-text"
              data-background="color"
              data-color="orange"
              data-radius="none"
            >
              <div className="content">
                <h6 className="category">Community Updates</h6>
                <p className="description">
                  Stay connected with local events and announcements, fostering a stronger community relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
