import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaTrash } from 'react-icons/fa';

export default function SavedJobs() {
  // Sample saved jobs data
  const savedJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      jobType: 'Full-time',
      postedDate: '3 days ago',
      savedDate: '2 days ago',
      logo: 'PLACEHOLDER',
      'data-image-request': 'modern tech company logo, minimalist design'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'Creative Designs Co.',
      location: 'Remote',
      jobType: 'Contract',
      postedDate: '2 days ago',
      savedDate: '1 day ago',
      logo: 'PLACEHOLDER',
      'data-image-request': 'creative design agency logo, colorful modern'
    }
  ];
  
  const handleRemove = (id) => {
    // In a real app, you would call an API to remove the saved job
    alert(`Removed job #${id} from saved jobs`);
  };
  
  if (savedJobs.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Saved Jobs</h2>
        <p className="text-gray-600 mb-6">You haven't saved any jobs yet.</p>
        <Link 
          to="/jobs" 
          className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition cursor-pointer"
        >
          Browse Jobs
        </Link>
      </div>
    );
  }
  
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Saved Jobs</h2>
      
      <div className="space-y-4">
        {savedJobs.map(job => (
          <div key={job.id} className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    data-image-request={job['data-image-request']}
                    className="h-12 w-12 rounded-md object-contain"
                  />
                </div>
                <div>
                  <Link to={`/jobs/${job.id}`} className="text-lg font-medium text-blue-600 hover:text-blue-800">
                    {job.title}
                  </Link>
                  <p className="text-sm text-gray-600">{job.company}</p>
                  
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
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
                      Posted {job.postedDate}
                    </div>
                  </div>
                  
                  <p className="mt-2 text-xs text-gray-500">
                    Saved {job.savedDate}
                  </p>
                </div>
              </div>
              
              <div>
                <button
                  onClick={() => handleRemove(job.id)}
                  className="p-2 text-gray-500 hover:text-red-500 cursor-pointer"
                  aria-label="Remove saved job"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}