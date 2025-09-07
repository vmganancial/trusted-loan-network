import React from 'react';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();

  return (
    <section id="apply" className="bg-[#f8f6f2] py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text */}
        <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">BE PART OF OUR TEAM</h2>
          <p className="mb-4">
            Join a dynamic team committed to revolutionizing the loan application process. At Trusted Loan Network, we are dedicated to creating innovative solutions that streamline workflows and enhance user experience. Whether you're a developer, designer, or professional with a passion for technology, your skills can make a significant impact on our mission to simplify financial assistance. 
          </p>
          <p className="mb-6">
            Together, we’re building a platform that ensures efficiency, security, and reliability in every step of the loan application journey. If you’re ready to contribute to a project that empowers users and transforms industries, apply now and be part of our vision for the future.
          </p>
          <button
            className="bg-secondary text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors"
            onClick={() => navigate('/coming-soon')}
          >
            Apply Now
          </button>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/team.jpg"
            alt="Our Team"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
