import React from 'react';

const ProfileIcon = ({ name = 'User', size = 'md' }) => {
  // Get initials from name
  const getInitials = (name) => {
    if (!name) return '';
    const words = name.trim().split(' ').filter(Boolean);
    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase();
    }
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  // Size classes
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-secondary text-white flex items-center justify-center font-semibold`}>
      {getInitials(name)}
    </div>
  );
};

export default ProfileIcon; 