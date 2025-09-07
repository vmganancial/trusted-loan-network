import React, { useState } from 'react';
import { FaSearch, FaFilter, FaEllipsisH, FaEnvelope, FaBriefcase, FaLinkedin, FaRegAddressCard, FaClock, FaCalendarAlt, FaPhoneAlt, FaFacebookF } from 'react-icons/fa';
import ProfileIcon from './ProfileIcon';

const agents = [
  {
    id: '#EMP02',
    name: 'Juan Tamad',
    title: 'Loan Specialist',
    status: 'Active',
    role: 'Managerial',
    employmentType: 'Fulltime',
    email: 'tamaditis00@trustedloan.ph',
    phone: '(40) 768 082 716',
    image: '/agent1.jpg', // Placeholder image path
    joinedDate: '1 Feb, 2019',
  },
  {
    id: '#EMP03',
    name: 'Juan Derful',
    title: 'Loan Specialist',
    status: 'Active',
    role: 'Managerial',
    employmentType: 'Fulltime',
    email: 'whataonederfultonight@trustedloan.ph',
    phone: '(63) 130 689 256',
    image: '/agent2.jpg', // Placeholder image path
    joinedDate: '1 Feb, 2021',
  },
  {
    id: '#EMP04',
    name: 'Mang Inasal',
    title: 'Loan Specialist',
    status: 'Active',
    role: 'Managerial',
    employmentType: 'Fulltime',
    email: 'cocomartin@trustedloan.ph',
    phone: '(64) 630 613 343',
    image: '/agent3.jpg', // Placeholder image path
    joinedDate: '21 Sep, 2018',
  },
  {
    id: '#EMP06',
    name: 'Dante Gulapa',
    title: 'Loan Specialist',
    status: 'Inactive',
    role: 'Web Designer',
    employmentType: 'Fulltime',
    email: 'gulapa69@trustedloan.ph',
    phone: '(80) 573 044 203',
    image: '/agent4.jpg', // Placeholder image path
    joinedDate: '1 Feb, 2019',
  },
   {
    id: '#EMP07',
    name: 'Mais Conyelo',
    title: 'Loan Specialist',
    status: 'Active',
    role: 'Managerial',
    employmentType: 'Fulltime',
    email: 'maismais123@trustedloan.ph',
    phone: '(49) 553 570 272',
    image: '/agent5.jpg', // Placeholder image path
    joinedDate: '1 Feb, 2021',
  },
    {
    id: '#EMP08',
    name: 'Jose Rizal',
    title: 'Loan Specialist',
    status: 'Active',
    role: 'Administration',
    employmentType: 'Fulltime',
    email: 'elfilibusterismo@trustedloan.ph',
    phone: '(12) 598 119 154',
    image: '/agent6.jpg', // Placeholder image path
    joinedDate: '21 Sep, 2018',
  },
];

const AgentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAgents, setFilteredAgents] = useState(agents);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    // Basic filtering logic
    setFilteredAgents(agents.filter(agent =>
      agent.name.toLowerCase().includes(value.toLowerCase()) ||
      agent.id.toLowerCase().includes(value.toLowerCase()) ||
      agent.title.toLowerCase().includes(value.toLowerCase()) ||
      agent.role.toLowerCase().includes(value.toLowerCase()) ||
      agent.email.toLowerCase().includes(value.toLowerCase()) ||
      agent.phone.toLowerCase().includes(value.toLowerCase())
    ));
  };

  const handleFilterClick = () => {
    // Filter button logic will go here
    alert('Filter button clicked!');
  };

  return (
    <div className="container mx-auto py-8 px-4 bg-blue-800">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Our Agents</h1>

      {/* Search and Filter Bar */}
      <div className="flex justify-center mb-6 space-x-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search agents..."
            className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 text-gray-900"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FaSearch className="absolute right-4 top-3 text-gray-400" />
        </div>
        <button
          className="px-4 py-2 bg-white text-blue-600 rounded-full shadow-sm flex items-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={handleFilterClick}
        >
          <FaFilter className="mr-2 text-blue-600" />
          Filter
        </button>
      </div>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map(agent => (
          <div
            key={agent.id}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 relative flex flex-col"
          >
             {/* Top Right Icon */}
            <div className="absolute top-4 right-4 flex items-center space-x-2">
                 <FaEllipsisH className="text-gray-400 cursor-pointer" />
            </div>

            {/* Status Indicator */}
             <div className={`absolute top-4 left-4 flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${agent.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}>
                <span className={`w-2 h-2 mr-1 rounded-full ${agent.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                {agent.status === 'Inactive' ? 'On Leave' : agent.status}
            </div>

            {/* Profile Picture and Basic Info */}
            <div className="flex items-center mb-4 mt-8">
              <div className="flex-shrink-0 mr-4">
                <ProfileIcon name={agent.name} size="lg" />
              </div>
              <div className="flex-grow">
                <p className="text-xl font-semibold text-gray-800 truncate">{agent.name}</p>
                 <p className="text-gray-600 text-sm truncate">{agent.title}</p>
              </div>
            </div>

            {/* Details Section */}
            <div className="bg-gray-100 p-4 rounded-lg flex-grow flex flex-col space-y-2 text-gray-700 text-sm mt-auto">
                 <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-blue-500" />
                    <a href={`mailto:${agent.email}`} className="hover:underline text-blue-600 break-all">{agent.email}</a>
                </div>
                <div className="flex items-center">
                    <FaLinkedin className="mr-2 text-blue-500" />
                    <a href="#" className="hover:underline text-blue-600">LinkedIn Profile</a>
                </div>
                <div className="flex items-center">
                    <FaFacebookF className="mr-2 text-blue-500" />
                    <a href="#" className="hover:underline text-blue-600">Facebook Profile</a>
                </div>
            </div>

            {/* Footer Section */}
             <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
                <div className="flex items-center">
                    <FaCalendarAlt className="mr-1 text-blue-500" />
                    <span>Joined on {agent.joinedDate}</span>
                </div>
                 <a href="#" className="text-blue-600 hover:underline">View details &gt;</a>
            </div>

          </div>
        ))}
         {filteredAgents.length === 0 && (
          <p className="text-center text-white col-span-full">No agents found.</p>
        )}
      </div>
    </div>
  );
};

export default AgentList; 