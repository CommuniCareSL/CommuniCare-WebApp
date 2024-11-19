import React from 'react';

const Features = () => {
  return (
    <div className="px-10 pt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-blue-500">
            Features of Communi Care
          </h1>
        </div>
        
        {/* Feature Card 1 */}
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-6 h-[250px] transition-all transform hover:border-2 hover:border-blue-500">
          <h6 className="text-lg font-semibold text-black mb-4 transition-colors duration-300">
            Dashboard Access
          </h6>
          <p className="text-gray-900 transition-colors duration-300">
            The user-friendly dashboard offers a clear view of all your activities in one place. From tracking updates to managing appointments, it simplifies your tasks with an intuitive, centralized hub.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-6 h-[250px] transition-all transform hover:border-2 hover:border-blue-500">
          <h6 className="text-lg font-semibold text-black mb-4 transition-colors duration-300">
            Language Support
          </h6>
          <p className="text-gray-900 transition-colors duration-300">
            Communicate effortlessly with support for both Sinhala and English. This feature promotes better understanding and inclusivity for all users, regardless of language preference.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-6 h-[250px] transition-all transform hover:border-2 hover:border-blue-500">
          <h6 className="text-lg font-semibold text-black mb-4 transition-colors duration-300">
            Custom Notifications
          </h6>
          <p className="text-gray-900 transition-colors duration-300">
            Stay organized with personalized notifications about complaint statuses, appointments, and updates. Never miss an important alert with this proactive feature.
          </p>
        </div>

        {/* Feature Card 4 */}
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-6 h-[250px] transition-all transform hover:border-2 hover:border-blue-500">
          <h6 className="text-lg font-semibold text-black mb-4 transition-colors duration-300">
            Service Directory
          </h6>
          <p className="text-gray-900 transition-colors duration-300">
            Explore services quickly using our detailed directory. Each listing provides key information, including contact details and descriptions, making it easier to find what you need.
          </p>
        </div>

        {/* Feature Card 5 */}
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-6 h-[250px] transition-all transform hover:border-2 hover:border-blue-500">
          <h6 className="text-lg font-semibold text-black mb-4 transition-colors duration-300">
            Community Updates
          </h6>
          <p className="text-gray-900 transition-colors duration-300">
            Stay connected with the latest news, events, and announcements in your community. This feature fosters engagement and strengthens local relationships.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
