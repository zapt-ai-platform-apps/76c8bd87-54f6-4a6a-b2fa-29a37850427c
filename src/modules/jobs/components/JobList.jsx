import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign, FaClock } from 'react-icons/fa';

export default function JobList({ jobs, filters }) {
  // In a real app, this filtering would likely happen server-side
  const filteredJobs = jobs.filter(job => {
    const query = filters.query.toLowerCase();
    const matchesQuery = !query || 
      job.title.toLowerCase().includes(query) || 
      job.company.toLowerCase().includes(query) ||
      job.description.toLowerCase().includes(query);
      
    const matchesLocation = !filters.location || 
      job.location.toLowerCase().includes(filters.location.toLowerCase());
      
    const matchesJobType = !filters.jobType || 
      job.jobType.toLowerCase() === filters.jobType.toLowerCase();
      
    const matchesExperience = !filters.experience || 
      job.experience.toLowerCase().includes(filters.experience.toLowerCase());
      
    return matchesQuery && matchesLocation && matchesJobType && matchesExperience;
  });

  if (filteredJobs.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-1">No jobs found</h3>
        <p className="text-gray-600">
          Try adjusting your search filters or exploring different terms.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredJobs.map(job => (
        <Link 
          key={job.id} 
          to={`/jobs/${job.id}`}
          className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
        >
          <div className="p-6">
            <div className="sm:flex sm:justify-between sm:items-start">
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
                  <h3 className="text-xl font-medium text-gray-900">{job.title}</h3>
                  <p className="text-base text-gray-600">{job.company}</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {job.jobType}
                </span>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-600 line-clamp-2">{job.description}</p>
            </div>
            
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-500">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-1 text-gray-400" />
                {job.location}
              </div>
              <div className="flex items-center">
                <FaDollarSign className="mr-1 text-gray-400" />
                {job.salary}
              </div>
              <div className="flex items-center">
                <FaBriefcase className="mr-1 text-gray-400" />
                {job.experience}
              </div>
              <div className="flex items-center">
                <FaClock className="mr-1 text-gray-400" />
                {job.postedDate}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}