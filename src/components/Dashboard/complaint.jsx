import React from 'react';
import './Complaints.css';
import 'boxicons/css/boxicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTree, faDog, faTrashAlt, faLightbulb, faFileAlt, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(faTree, faDog, faTrashAlt, faLightbulb, faFileAlt, faEllipsisH);

const Complaints = () => {
  return (
    <div className="home-content">
      <div className="overview-boxes">
        {Array.from({ length: 12 }).map((_, index) => {
          const icons = ['tree', 'dog', 'trash-alt', 'lightbulb', 'file-alt', 'ellipsis-h'];
          const topics = ['Tree Removal', 'Stray Animal', 'Garbage Collection', 'Light Maintenance', 'Rental Permit', 'Others'];
          const icon = icons[index % icons.length];
          const topic = topics[index % topics.length];

          return (
            <div className="box" key={index}>
              <FontAwesomeIcon icon={icon} className="icon-style" />
              <div className="box-topic">{topic}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Complaints;
