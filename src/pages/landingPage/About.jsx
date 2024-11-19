import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faUsers, faXmark, faClock, faKey, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white/30 to-white/50 backdrop-blur-lg flex items-center justify-center pt-16">
      <div className="w-full max-w-7xl px-6 lg:px-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-blue-500">
            Why Use Communi Care?
          </h1>
        </div>

        {/* Services Section */}
        <section id="services" className="flex flex-wrap justify-between gap-6">
          {/* Service Boxes */}
          {[
            {
              icon: faUsers,
              title: 'User Friendly',
              description:
                'The platform features an intuitive interface designed to be user-friendly for everyone. Even those with minimal technical skills can navigate it effortlessly.',
            },
            {
              icon: faXmark,
              title: 'No Lines',
              description:
                'Schedule services and appointments at your convenience from home. Save time by avoiding long queues at local government offices.',
            },
            {
              icon: faClock,
              title: 'Real-Time Updates',
              description:
                'Receive real-time updates on the status of your complaints. Stay informed every step of the way, from submission to resolution.',
            },
            {
              icon: faDesktop,
              title: 'Fast Service',
              description:
                'Experience faster resolution of issues and queries with streamlined processes. Get the help you need promptly without unnecessary delays.',
            },
            {
              icon: faKey,
              title: 'Data Security',
              description:
                'Your data is protected with strong security measures. Trust that your personal information remains confidential and safe.',
            },
            {
              icon: faFaceSmile,
              title: 'Anytime Access',
              description:
                'Access the platform from both web and mobile devices. Use it wherever and whenever you need, ensuring maximum convenience.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] bg-white/70 shadow-lg rounded-lg p-6 transition-all hover:scale-105 hover:bg-gradient-to-r from-black via-gray-800 to-blue-700 hover:text-blue-500"
            >
              {/* Icon */}
              <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4 border-4 border-blue-500">
                <FontAwesomeIcon icon={service.icon} size="lg" />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-600 hover:text-white transition-all">
                {service.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default About;
