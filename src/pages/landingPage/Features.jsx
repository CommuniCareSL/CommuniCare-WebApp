import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Features = () => {
  return (
    <div className="px-10 pt-32">
      {/* Title Animation */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Slow fade-in for the title
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-blue-500">
          Features of Communi Care
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature Cards */}
        {[
          {
            title: 'Dashboard Access',
            description:
              'The user-friendly dashboard offers a clear view of all your activities in one place. From tracking updates to managing appointments, it simplifies your tasks with an intuitive, centralized hub.',
          },
          {
            title: 'Language Support',
            description:
              'Communicate effortlessly with support for both Sinhala and English. This feature promotes better understanding and inclusivity for all users, regardless of language preference.',
          },
          {
            title: 'Custom Notifications',
            description:
              'Stay organized with personalized notifications about complaint statuses, appointments, and updates. Never miss an important alert with this proactive feature.',
          },
          {
            title: 'Service Directory',
            description:
              'Explore services quickly using our detailed directory. Each listing provides key information, including contact details and descriptions, making it easier to find what you need.',
          },
          {
            title: 'Community Updates',
            description:
              'Stay connected with the latest news, events, and announcements in your community. This feature fosters engagement and strengthens local relationships.',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-6 h-[250px] transition-all transform hover:border-2 hover:border-blue-500"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay to stagger appearance
          >
            <h6 className="text-lg font-semibold text-black mb-4">{feature.title}</h6>
            <p className="text-gray-900">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features;
