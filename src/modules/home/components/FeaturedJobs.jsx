import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function FeaturedJobs() {
  // Sample featured jobs data
  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      jobType: 'Full-time',
      postedDate: '3 days ago',
      logo: 'PLACEHOLDER',
      'data-image-request': 'modern tech company logo, minimalist design'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Global Solutions Group',
      location: 'New York, NY',
      jobType: 'Full-time',
      postedDate: '1 week ago',
      logo: 'PLACEHOLDER',
      'data-image-request': 'corporate business logo, professional blue theme'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'Creative Designs Co.',
      location: 'Remote',
      jobType: 'Contract',
      postedDate: '2 days ago',
      logo: 'PLACEHOLDER',
      'data-image-request': 'creative design agency logo, colorful modern'
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      company: 'Brand Builders',
      location: 'Chicago, IL',
      jobType: 'Full-time',
      postedDate: '5 days ago',
      logo: 'PLACEHOLDER',
      'data-image-request': 'marketing agency logo, professional and bold'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Featured Jobs</h2>
          <p className="mt-4 text-lg text-gray-600">
            Highlighted opportunities from top employers
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {featuredJobs.map(job => (
            <Link key={job.id} to={`/jobs/${job.id}`} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        data-image-request={job['data-image-request']}
                        className="h-16 w-16 rounded-md object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.company}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-1 text-gray-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <FaBriefcase className="mr-1 text-gray-400" />
                      {job.jobType}
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-1 text-gray-400" />
                      {job.postedDate}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/jobs" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 cursor-pointer"
          >
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}