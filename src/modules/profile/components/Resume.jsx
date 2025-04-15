import React, { useState } from 'react';
import { FaUpload, FaDownload, FaTrash } from 'react-icons/fa';
import LoadingSpinner from '@/modules/core/components/LoadingSpinner';

export default function Resume() {
  const [resume, setResume] = useState({
    name: 'John_Doe_Resume.pdf',
    lastUpdated: 'May 15, 2023',
    url: '#'
  });
  const [isUploading, setIsUploading] = useState(false);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      
      // Simulate file upload
      setTimeout(() => {
        setResume({
          name: file.name,
          lastUpdated: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }),
          url: '#'
        });
        setIsUploading(false);
      }, 2000);
    }
  };
  
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your resume?')) {
      setResume(null);
    }
  };
  
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Resume</h2>
      
      {isUploading ? (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-gray-600">Uploading your resume...</p>
        </div>
      ) : resume ? (
        <div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{resume.name}</h3>
                <p className="text-sm text-gray-500">Last updated: {resume.lastUpdated}</p>
              </div>
              <div className="flex space-x-2">
                <button 
                  className="p-2 text-gray-500 hover:text-blue-600 cursor-pointer"
                  aria-label="Download resume"
                >
                  <FaDownload />
                </button>
                <button 
                  onClick={handleDelete}
                  className="p-2 text-gray-500 hover:text-red-600 cursor-pointer"
                  aria-label="Delete resume"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Replace Resume</h3>
            <label 
              htmlFor="resume-upload" 
              className="block w-full cursor-pointer px-4 py-2 border border-gray-300 rounded-md shadow-sm text-center text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FaUpload className="inline mr-2" />
              Upload New Resume
            </label>
            <input 
              id="resume-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="sr-only"
            />
            <p className="mt-1 text-xs text-gray-500 text-center">
              Accepted formats: PDF, DOC, DOCX. Max size: 5MB
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-6">
            Upload your resume to easily apply to jobs. Employers will be able to see your resume when you apply.
          </p>
          
          <label 
            htmlFor="resume-upload" 
            className="inline-block cursor-pointer px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <FaUpload className="inline mr-2" />
            Upload Resume
          </label>
          <input 
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="sr-only"
          />
          <p className="mt-2 text-xs text-gray-500">
            Accepted formats: PDF, DOC, DOCX. Max size: 5MB
          </p>
        </div>
      )}
    </div>
  );
}