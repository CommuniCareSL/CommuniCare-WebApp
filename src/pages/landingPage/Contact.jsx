import React from 'react';
import app from '../../assets/landingPage/contact.png';

const Contact = () => {
  return (
    
    <div className="flex items-center justify-center min-h-screen w-full px-4 py-16 relative" >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg h-auto md:h-[550px] bg-white/30 backdrop-blur-lg shadow-lg rounded-lg p-10 border-4 border-[#0991FF]" style={{marginTop:'50px'}}>
        
        {/* Contact Logo */}
        <div className="flex justify-center items-center w-full md:w-[420px] md:h-[380px] mb-8 md:mb-0">
          <img src={app} alt="Logo" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form action="#" className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-black mb-6">CONTACT US</h2>
            
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row mb-6 w-full justify-between gap-4">
              <div className="relative w-full md:w-[45%]">
                <input
                  type="text"
                  required
                  className="w-full h-10 bg-transparent border-b-2 border-[#0991FF] text-black text-base focus:outline-none focus:ring-0 peer pt-6"
                />
                <label className="absolute left-0 top-0 transform text-black text-base peer-focus:text-xs peer-focus:text-[#0991FF] transition-all peer-focus:pt-0 peer-focus:left-0 peer-focus:top-[-10px]">First Name</label>
              </div>
              <div className="relative w-full md:w-[45%]">
                <input
                  type="text"
                  required
                  className="w-full h-10 bg-transparent border-b-2 border-[#0991FF] text-black text-base focus:outline-none focus:ring-0 peer pt-6"
                />
                <label className="absolute left-0 top-0 transform text-black text-base peer-focus:text-xs peer-focus:text-[#0991FF] transition-all peer-focus:pt-0 peer-focus:left-0 peer-focus:top-[-10px]">Last Name</label>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row mb-6 w-full justify-between gap-4">
              <div className="relative w-full md:w-[45%]">
                <input
                  type="phone"
                  required
                  className="w-full h-10 bg-transparent border-b-2 border-[#0991FF] text-black text-base focus:outline-none focus:ring-0 peer pt-6"
                />
                <label className="absolute left-0 top-0 transform text-black text-base peer-focus:text-xs peer-focus:text-[#0991FF] transition-all peer-focus:pt-0 peer-focus:left-0 peer-focus:top-[-10px]">Phone Number</label>
              </div>
              <div className="relative w-full md:w-[45%]">
                <input
                  type="email"
                  required
                  className="w-full h-10 bg-transparent border-b-2 border-[#0991FF] text-black text-base focus:outline-none focus:ring-0 peer pt-6"
                />
                <label className="absolute left-0 top-0 transform text-black text-base peer-focus:text-xs peer-focus:text-[#0991FF] transition-all peer-focus:pt-0 peer-focus:left-0 peer-focus:top-[-10px]">Email</label>
              </div>
            </div>

            {/* Description Field */}
            <div className="flex flex-col mb-6 w-full">
              <label className="text-black text-lg">Description</label>
              <textarea
                rows="5"
                required
                className="w-full p-4 mt-2 bg-transparent border-2 border-[#0991FF] text-black rounded-lg focus:outline-none focus:ring-0 placeholder-transparent peer"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-32 py-2 bg-black text-[#0991FF] font-semibold text-lg border-2 border-[#0991FF] rounded-lg hover:bg-[#007AFF] hover:text-white transition-all"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
