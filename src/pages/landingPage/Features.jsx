import React from 'react';

const Features = () => {
  return (
    <div className="px-10 pt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-blue-500">
            Features Communi Care?
          </h1>
        </div>
        {/* Feature Card 1 */}
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-6 h-[250px] transition-all transform hover:border-2 hover:border-blue-500">
          <h6 className="text-lg font-semibold text-black mb-4 transition-colors duration-300">
            Dashboard Access
          </h6>
          <p className="text-gray-900 transition-colors duration-300">
            View all your interactions, updates, and appointments in one easy-to-access dashboard.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-6 h-[250px] transition-all transform hover:border-2 hover:border-blue-500">
          <h6 className="text-lg font-semibold text-black mb-4 transition-colors duration-300">
            Language Support
          </h6>
          <p className="text-gray-900 transition-colors duration-300">
            Communicate in your preferred language with support for both Sinhala and English.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-6 h-[250px] transition-all transform hover:border-2 hover:border-blue-500">
          <h6 className="text-lg font-semibold text-black mb-4 transition-colors duration-300">
            Custom Notifications
          </h6>
          <p className="text-gray-900 transition-colors duration-300">
            Receive customized notifications about the status of your complaints and appointments.
          </p>
        </div>

        {/* Feature Card 4 */}
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-6 h-[250px] transition-all transform hover:border-2 hover:border-blue-500">
          <h6 className="text-lg font-semibold text-black mb-4 transition-colors duration-300">
            Service Directory
          </h6>
          <p className="text-gray-900 transition-colors duration-300">
            Quickly find and access the services you need, with detailed information and easy navigation.
          </p>
        </div>

        

        {/* Feature Card 5 */}
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-6 h-[250px] transition-all transform hover:border-2 hover:border-blue-500">
          <h6 className="text-lg font-semibold text-black mb-4 transition-colors duration-300">
            Community Updates
          </h6>
          <p className="text-gray-900 transition-colors duration-300">
            Stay connected with local events and announcements, fostering a stronger community relationship.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
