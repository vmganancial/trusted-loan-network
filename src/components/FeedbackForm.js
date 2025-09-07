import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ fullName: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className={`block w-full rounded-md border-2 border-primary bg-transparent px-4 py-3 focus:border-secondary focus:ring-secondary placeholder:text-primary text-lg ${
          errors.fullName ? 'border-red-500' : ''
        }`}
      />
      {errors.fullName && (
        <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
      )}

      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className={`block w-full rounded-md border-2 border-primary bg-transparent px-4 py-3 focus:border-secondary focus:ring-secondary placeholder:text-primary text-lg ${
          errors.email ? 'border-red-500' : ''
        }`}
      />
      {errors.email && (
        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
      )}

      <textarea
        id="message"
        name="message"
        rows="4"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className={`block w-full rounded-md border-2 border-primary bg-transparent px-4 py-3 focus:border-secondary focus:ring-secondary placeholder:text-primary text-lg ${
          errors.message ? 'border-red-500' : ''
        }`}
      />
      {errors.message && (
        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
      )}

      <button
        type="submit"
        className="w-full bg-secondary text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-colors duration-200 text-lg font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm; 