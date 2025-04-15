import React from 'react';
import { Link } from 'react-router-dom';
import ZaptBadge from '@/modules/core/components/ZaptBadge';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <ZaptBadge />
        </div>
        <div className="mt-4 md:mt-0 md:order-1 flex flex-col sm:flex-row justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-600">
            Home
          </Link>
          <Link to="/jobs" className="text-sm text-gray-500 hover:text-gray-600">
            Find Jobs
          </Link>
          <span className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Jobapp. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}