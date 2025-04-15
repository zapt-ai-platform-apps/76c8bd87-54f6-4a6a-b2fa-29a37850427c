import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa';

export default function JobApplications() {
  // Sample applications data
  const applications = [
    {
      id: 1,
      jobId: 1,
      jobTitle: 'Senior Software Engineer',
      company: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      appliedDate: 'May 15, 2023',
      status: 'pending',
      logo: 'PLACEHOLDER',
      'data-image-request': 'modern tech company logo, minimalist design'
    },
    {
      id: 2,
      jobId: 2,
      jobTitle: 'Product Manager',
      company: 'Global Solutions Group',
      location: 'New York, NY',
      appliedDate: 'May 10, 2023',
      status: 'rejected',
      logo: 'PLACEHOLDER',
      'data-image-request': 'corporate business logo, professional blue theme'
    },
    {
      id: 3,
      jobId: 5,
      jobTitle: 'Data Scientist',
      company: 'Data Insights Corp',
      location: 'Boston, MA',
      appliedDate: 'April 28, 2023',
      status: 'interview',
      logo: 'PLACEHOLDER',
      'data-image-request': 'data science company logo, tech modern'
    }
  ];
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <FaHourglassHalf className="text-yellow-500" />;
      case 'interview':
        return <FaCheckCircle className="text-green-500" />;
      case 'rejected':
        return <FaTimesCircle className="text-red-500" />;
      default:
        return <FaHourglassHalf className="text-yellow-500" />;
    }
  };
  
  const getStatusText = (status) => {
    switch (status) {
      case 'pending':
        return 'Application Under Review';
      case 'interview':
        return 'Interview Scheduled';
      case 'rejected':
        return 'Application Not Selected';
      default:
        return 'Unknown Status';
    }
  };
  
  if (applications.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Job Applications</h2>
        <p className="text-gray-600 mb-6">You haven't applied to any jobs yet.</p>
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
      <h2 className="text-xl font-bold text-gray-900 mb-6">Job Applications</h2>
      
      <div className="space-y-4">
        {applications.map(application => (
          <div key={application.id} className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <img
                  src={application.logo}
                  alt={`${application.company} logo`}
                  data-image-request={application['data-image-request']}
                  className="h-12 w-12 rounded-md object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <Link to={`/jobs/${application.jobId}`} className="text-lg font-medium text-blue-600 hover:text-blue-800">
                      {application.jobTitle}
                    </Link>
                    <p className="text-sm text-gray-600">{application.company}</p>
                  </div>
                  <div className="flex items-center">
                    {getStatusIcon(application.status)}
                    <span className="ml-2 text-sm font-medium">
                      {getStatusText(application.status)}
                    </span>
                  </div>
                </div>
                
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-gray-400" />
                    {application.location}
                  </div>
                  <div className="flex items-center">
                    <FaBriefcase className="mr-1 text-gray-400" />
                    Applied on {application.appliedDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}