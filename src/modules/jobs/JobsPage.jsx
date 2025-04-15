import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import JobList from './components/JobList';
import JobFilters from './components/JobFilters';
import LoadingSpinner from '@/modules/core/components/LoadingSpinner';

export default function JobsPage() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    query: '',
    location: '',
    jobType: '',
    experience: '',
    datePosted: ''
  });
  
  const location = useLocation();
  
  useEffect(() => {
    // Extract search query from URL if present
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('q');
    
    if (queryParam) {
      setFilters(prev => ({ ...prev, query: queryParam }));
    }
    
    // Simulate fetching jobs data
    const fetchJobs = () => {
      setLoading(true);
      
      // In a real app, you would fetch from an API with the filters
      setTimeout(() => {
        // Sample jobs data
        const jobsData = [
          {
            id: 1,
            title: 'Senior Software Engineer',
            company: 'Tech Innovators Inc.',
            location: 'San Francisco, CA',
            jobType: 'Full-time',
            salary: '$120,000 - $150,000',
            experience: '5+ years',
            postedDate: '3 days ago',
            description: 'Join our team to build cutting-edge software solutions.',
            logo: 'PLACEHOLDER',
            'data-image-request': 'modern tech company logo, minimalist design'
          },
          {
            id: 2,
            title: 'Product Manager',
            company: 'Global Solutions Group',
            location: 'New York, NY',
            jobType: 'Full-time',
            salary: '$110,000 - $130,000',
            experience: '3-5 years',
            postedDate: '1 week ago',
            description: 'Lead product development for our enterprise clients.',
            logo: 'PLACEHOLDER',
            'data-image-request': 'corporate business logo, professional blue theme'
          },
          {
            id: 3,
            title: 'UX/UI Designer',
            company: 'Creative Designs Co.',
            location: 'Remote',
            jobType: 'Contract',
            salary: '$80,000 - $100,000',
            experience: '2-4 years',
            postedDate: '2 days ago',
            description: 'Create beautiful, intuitive user interfaces for our products.',
            logo: 'PLACEHOLDER',
            'data-image-request': 'creative design agency logo, colorful modern'
          },
          {
            id: 4,
            title: 'Marketing Specialist',
            company: 'Brand Builders',
            location: 'Chicago, IL',
            jobType: 'Full-time',
            salary: '$70,000 - $90,000',
            experience: '2-3 years',
            postedDate: '5 days ago',
            description: 'Develop and execute marketing strategies to drive growth.',
            logo: 'PLACEHOLDER',
            'data-image-request': 'marketing agency logo, professional and bold'
          },
          {
            id: 5,
            title: 'Data Scientist',
            company: 'Data Insights Corp',
            location: 'Boston, MA',
            jobType: 'Full-time',
            salary: '$100,000 - $130,000',
            experience: '3-5 years',
            postedDate: '1 day ago',
            description: 'Analyze complex data sets to drive business decisions.',
            logo: 'PLACEHOLDER',
            'data-image-request': 'data science company logo, tech modern'
          },
          {
            id: 6,
            title: 'Frontend Developer',
            company: 'Web Solutions LLC',
            location: 'Austin, TX',
            jobType: 'Full-time',
            salary: '$90,000 - $110,000',
            experience: '2-4 years',
            postedDate: '4 days ago',
            description: 'Build responsive web applications using modern frameworks.',
            logo: 'PLACEHOLDER',
            'data-image-request': 'web development company logo, tech themed'
          },
          {
            id: 7,
            title: 'DevOps Engineer',
            company: 'Cloud Systems Inc',
            location: 'Seattle, WA',
            jobType: 'Full-time',
            salary: '$110,000 - $140,000',
            experience: '3-6 years',
            postedDate: '2 weeks ago',
            description: 'Manage and optimize our cloud infrastructure and CI/CD pipelines.',
            logo: 'PLACEHOLDER',
            'data-image-request': 'cloud technology company logo, modern tech'
          },
          {
            id: 8,
            title: 'Content Writer',
            company: 'Digital Media Group',
            location: 'Remote',
            jobType: 'Part-time',
            salary: '$50,000 - $70,000',
            experience: '1-3 years',
            postedDate: '6 days ago',
            description: 'Create engaging content for our digital platforms and clients.',
            logo: 'PLACEHOLDER',
            'data-image-request': 'digital media company logo, creative modern'
          }
        ];
        
        setJobs(jobsData);
        setLoading(false);
      }, 1000);
    };
    
    fetchJobs();
  }, [location.search]);
  
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // In a real app, you would fetch data with the new filters
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Jobs</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Filters sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <JobFilters filters={filters} onFilterChange={handleFilterChange} />
          </div>
          
          {/* Job listings */}
          <div className="lg:col-span-9">
            {/* Mobile filters toggle */}
            <div className="block lg:hidden mb-4">
              <button
                className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 cursor-pointer"
                onClick={() => alert('Mobile filters not implemented in this demo')}
              >
                Filters
              </button>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <LoadingSpinner size="lg" />
              </div>
            ) : (
              <JobList jobs={jobs} filters={filters} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}