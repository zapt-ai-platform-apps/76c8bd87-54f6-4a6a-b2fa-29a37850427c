import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign, FaClock, FaBookmark, FaRegBookmark, FaShare, FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import LoadingSpinner from '@/modules/core/components/LoadingSpinner';
import { format } from 'date-fns';

export default function JobDetailPage() {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate fetching job data
    const fetchJob = () => {
      setLoading(true);
      
      // In a real app, you would fetch from an API
      setTimeout(() => {
        // Find the job by ID (in a real app, this would be an API call)
        const jobData = {
          id: parseInt(id),
          title: 'Senior Software Engineer',
          company: 'Tech Innovators Inc.',
          location: 'San Francisco, CA',
          jobType: 'Full-time',
          salary: '$120,000 - $150,000',
          experience: '5+ years',
          postedDate: '3 days ago',
          description: `
            <p>We are looking for a Senior Software Engineer to join our growing team. You will be responsible for designing, developing, and maintaining high-quality software solutions.</p>
            
            <h3>Responsibilities:</h3>
            <ul>
              <li>Design and develop high-quality software solutions</li>
              <li>Collaborate with cross-functional teams to define and implement new features</li>
              <li>Write clean, maintainable code and perform code reviews</li>
              <li>Troubleshoot and debug applications</li>
              <li>Stay up-to-date with emerging trends and technologies</li>
            </ul>
            
            <h3>Requirements:</h3>
            <ul>
              <li>5+ years of professional software development experience</li>
              <li>Strong proficiency in JavaScript, TypeScript, and React</li>
              <li>Experience with backend technologies such as Node.js</li>
              <li>Familiarity with cloud services (AWS, Azure, or GCP)</li>
              <li>Bachelor's degree in Computer Science or related field</li>
            </ul>
            
            <h3>Benefits:</h3>
            <ul>
              <li>Competitive salary and equity package</li>
              <li>Health, dental, and vision insurance</li>
              <li>Flexible work arrangements</li>
              <li>Professional development budget</li>
              <li>Paid time off and parental leave</li>
            </ul>
          `,
          logo: 'PLACEHOLDER',
          'data-image-request': 'modern tech company logo, minimalist design',
          companyDescription: 'Tech Innovators Inc. is a leading technology company focused on building cutting-edge software solutions for enterprise clients. Founded in 2010, we have grown to over 500 employees across offices in San Francisco, New York, and London.',
          applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        };
        
        setJob(jobData);
        setLoading(false);
      }, 1000);
    };
    
    fetchJob();
  }, [id]);
  
  const toggleSaved = () => {
    if (!user) {
      navigate('/login', { state: { from: `/jobs/${id}` } });
      return;
    }
    
    setIsSaved(!isSaved);
    // In a real app, you would call an API to save/unsave the job
  };
  
  const handleApply = () => {
    if (!user) {
      navigate('/login', { state: { from: `/jobs/${id}` } });
      return;
    }
    
    setIsApplying(true);
    // In a real app, you would send an application to the backend
    
    setTimeout(() => {
      setIsApplying(false);
      alert('Your application has been submitted!');
    }, 1500);
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job?.title,
        text: `Check out this ${job?.title} job at ${job?.company}`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          alert('Job link copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }
  
  if (!job) {
    return (
      <div className="text-center py-10">
        <h3 className="text-lg font-medium text-gray-900 mb-1">Job not found</h3>
        <p className="text-gray-600 mb-6">
          The job you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          to="/jobs" 
          className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition cursor-pointer"
        >
          Browse All Jobs
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link 
          to="/jobs" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to jobs
        </Link>
      </div>
      
      {/* Job Header */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="p-6">
          <div className="sm:flex sm:justify-between sm:items-start">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  data-image-request={job['data-image-request']}
                  className="h-20 w-20 rounded-md object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                <p className="text-lg text-gray-600">{job.company}</p>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-0 flex items-center">
              <button
                onClick={toggleSaved}
                className="mr-2 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                aria-label={isSaved ? "Unsave job" : "Save job"}
              >
                {isSaved ? (
                  <FaBookmark className="text-blue-600 text-xl" />
                ) : (
                  <FaRegBookmark className="text-gray-500 text-xl" />
                )}
              </button>
              
              <button
                onClick={handleShare}
                className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                aria-label="Share job"
              >
                <FaShare className="text-gray-500 text-xl" />
              </button>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-400" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <FaBriefcase className="mr-2 text-gray-400" />
              <span>{job.jobType}</span>
            </div>
            <div className="flex items-center">
              <FaDollarSign className="mr-2 text-gray-400" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 text-gray-400" />
              <span>{job.postedDate}</span>
            </div>
          </div>
          
          <div className="mt-6 sm:flex sm:items-center">
            <button
              onClick={handleApply}
              disabled={isApplying}
              className="w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
            >
              {isApplying ? (
                <div className="flex items-center justify-center">
                  <LoadingSpinner size="sm" />
                  <span className="ml-2">Applying...</span>
                </div>
              ) : (
                "Apply Now"
              )}
            </button>
            
            <p className="mt-3 sm:mt-0 sm:ml-4 text-sm text-gray-500">
              Application closes on {format(job.applicationDeadline, 'MMMM d, yyyy')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Job Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Description */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Job Description</h2>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </div>
          </div>
        </div>
        
        {/* Company Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About the Company</h2>
              <p className="text-gray-600 mb-6">{job.companyDescription}</p>
              
              <div className="text-center">
                <button
                  onClick={() => alert('Company profile view not implemented in this demo')}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                >
                  View Company Profile
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-6">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Similar Jobs</h2>
              <p className="text-gray-600 text-center">
                Similar jobs feature not implemented in this demo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}