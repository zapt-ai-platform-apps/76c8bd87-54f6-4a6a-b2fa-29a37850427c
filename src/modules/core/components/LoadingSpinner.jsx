import React from 'react';

export default function LoadingSpinner({ size = 'md' }) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-4',
    lg: 'w-12 h-12 border-6',
  };
  
  return (
    <div className={`${sizeClasses[size]} border-t-blue-500 border-solid border-gray-200 rounded-full animate-spin`}></div>
  );
}