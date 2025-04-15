import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaBriefcase, FaBuilding, FaUsers } from 'react-icons/fa';
import FeaturedJobs from './components/FeaturedJobs';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/jobs?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Find Your Dream Job
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl">
              Discover thousands of job opportunities with all the information you need.
            </p>
            
            <form onSubmit={handleSearch} className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for jobs, companies, or keywords"
                  className="w-full h-14 pl-12 pr-4 rounded-lg shadow-md border-0 focus:ring-2 focus:ring-white box-border"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-4 top-4 text-gray-400">
                  <FaSearch size={24} />
                </div>
                <button
                  type="submit"
                  className="absolute right-3 top-3 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-950 transition cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Why Choose Jobapp</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-gray-600">
            We help job seekers find their perfect role without the hassle of ads or redirects.
          </p>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-center items-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto mb-4">
                  <FaBriefcase />
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center">Direct Applications</h3>
                <p className="mt-2 text-gray-600 text-center">
                  Apply directly to jobs without being redirected to other websites.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-center items-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto mb-4">
                  <FaBuilding />
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center">Top Companies</h3>
                <p className="mt-2 text-gray-600 text-center">
                  Find opportunities at the best companies in your industry.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-center items-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto mb-4">
                  <FaUsers />
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center">No Social Network</h3>
                <p className="mt-2 text-gray-600 text-center">
                  Focus solely on finding jobs without social networking distractions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <FeaturedJobs />
      
      {/* CTA Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Ready to find your next opportunity?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Browse our full list of available positions and find the perfect match for your skills.
            </p>
            <button
              onClick={() => navigate('/jobs')}
              className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition cursor-pointer"
            >
              Explore All Jobs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}