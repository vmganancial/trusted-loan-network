import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleMeetAgentsClick = () => {
    navigate('/agents');
  };

  return (
    <section id="about" className="bg-primary py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/about-us.jpg"
            alt="About Us"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
        {/* Text */}
        <div className="w-full md:w-1/2 md:pl-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT US</h2>
          <p className="mb-4">
            At Trusted Loan Network, we are dedicated to transforming the loan application process by leveraging cutting-edge technology to streamline workflows and enhance user experience. Our team of experts combines innovative solutions with a commitment to security and efficiency, ensuring that every step of the loan application journey is seamless and reliable.          </p>
          <p>
            With a focus on automation, data integrity, and customer satisfaction, we empower users to access financial assistance quickly and securely. Whether you're a loan applicant seeking assistance or a professional managing loan applications, our platform provides the tools and support needed to navigate the loan process with confidence.
          </p>
          {/* New Container - Clickable Button */}
          <div
            className="mt-8 p-6 bg-white rounded-xl shadow-lg text-center flex items-center justify-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 group hover:text-primary"
            onClick={handleMeetAgentsClick}
          >
            <FaUser className="text-2xl align-middle mr-2 text-gray-900 group-hover:text-primary" />
            <p className="text-xl font-semibold align-middle text-gray-900 group-hover:text-primary">Meet the Agents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
