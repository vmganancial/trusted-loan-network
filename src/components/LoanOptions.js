import React from 'react';
import { FaWallet, FaBriefcase, FaUserMd } from 'react-icons/fa';

const options = [
  {
    icon: <FaWallet size={48} />, 
    label: 'Personal Loan', 
    description: 'A non-collateral and no co-maker cash loan for salaried individuals.'
  },
  {
    icon: <FaBriefcase size={48} />, 
    label: 'Business Loan', 
    description: 'Without collateral installment loan for business owners.'
  },
  {
    icon: <FaUserMd size={48} />, 
    label: 'Doctors Loan', 
    description: 'A multi-purpose loan for medical practitioner.'
  },
];

const LoanOptions = () => (
  <section className="flex justify-center gap-8 py-10 bg-[#f8f6f2]">
    {options.map((opt, idx) => (
      <div
        key={idx}
        className="relative group bg-secondary text-white flex flex-col items-center justify-center rounded-xl shadow-lg w-64 h-56 transition-transform hover:scale-105 focus:outline-none cursor-pointer"
        style={{ textDecoration: 'none' }}
      >
        {/* Icon and Title */}
        <div className="flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
          {opt.icon}
          <span className="mt-4 text-xl font-semibold">{opt.label}</span>
        </div>
        {/* Description Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-white bg-opacity-95 rounded-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300">
          <span className="text-primary text-lg font-bold mb-2">{opt.label}</span>
          <span className="text-gray-700">{opt.description}</span>
        </div>
      </div>
    ))}
  </section>
);

export default LoanOptions;
