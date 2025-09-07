import React, { useState } from 'react';

const LoanEligibilityForm = ({ loanType = "Personal Loan" }) => {
  const [citizen, setCitizen] = useState('');
  const [age, setAge] = useState('');
  const [agree, setAgree] = useState(false);

  // Placeholder for reCAPTCHA
  const Recaptcha = () => (
    <div className="bg-gray-200 rounded-md flex items-center justify-center h-16 w-64 my-4">
      <span className="text-gray-600">[ reCAPTCHA ]</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center">
      {/* Green Bar */}
      <div className="w-full h-8 bg-secondary mb-8"></div>
      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-lg px-8 py-10 max-w-xl w-full flex flex-col items-center">
        <h2 className="text-xl font-bold text-center mb-2">Excited to have you here!</h2>
        <h3 className="text-lg font-semibold text-center mb-8">
          Before we begin, let's first see if you are eligible for a {loanType.toLowerCase()}.
        </h3>
        <form className="w-full max-w-md mx-auto text-left">
          <div className="mb-6">
            <label className="block mb-2">
              Are you a Filipino citizen or a foreigner residing in the Philippines?
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="citizen"
                value="yes"
                checked={citizen === 'yes'}
                onChange={() => setCitizen('yes')}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="citizen"
                value="no"
                checked={citizen === 'no'}
                onChange={() => setCitizen('no')}
                className="mr-1"
              />
              No
            </label>
          </div>
          <div className="mb-6">
            <label className="block mb-2">
              Are you between 23 to 65 years old.
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="age"
                value="yes"
                checked={age === 'yes'}
                onChange={() => setAge('yes')}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="age"
                value="no"
                checked={age === 'no'}
                onChange={() => setAge('no')}
                className="mr-1"
              />
              No
            </label>
          </div>
          <Recaptcha />
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mr-2"
            />
            <label htmlFor="agree" className="text-sm">
              I agree to Trusted Loan Network's Data Privacy Statement.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 rounded-md font-semibold shadow hover:bg-green-700 transition-colors"
          >
            Continue &gt;
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanEligibilityForm;
