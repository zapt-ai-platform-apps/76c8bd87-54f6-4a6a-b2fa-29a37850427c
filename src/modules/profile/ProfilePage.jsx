import React, { useState } from 'react';
import { FaUser, FaHistory, FaBookmark, FaBriefcase, FaFileAlt, FaCog } from 'react-icons/fa';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import SavedJobs from './components/SavedJobs';
import JobApplications from './components/JobApplications';
import ProfileInfo from './components/ProfileInfo';
import Resume from './components/Resume';
import Settings from './components/Settings';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  const { user } = useAuth();
  
  const tabs = [
    { id: 'profile', label: 'Profile', icon: <FaUser /> },
    { id: 'applications', label: 'Applications', icon: <FaHistory /> },
    { id: 'saved', label: 'Saved Jobs', icon: <FaBookmark /> },
    { id: 'resume', label: 'Resume', icon: <FaFileAlt /> },
    { id: 'settings', label: 'Settings', icon: <FaCog /> },
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Profile</h1>
      
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-3">
          <nav className="space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  w-full flex items-center px-4 py-3 text-left rounded-md text-sm font-medium cursor-pointer
                  ${activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <span className="mr-3">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Content */}
        <div className="mt-6 lg:mt-0 lg:col-span-9">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {activeTab === 'profile' && <ProfileInfo user={user} />}
            {activeTab === 'applications' && <JobApplications />}
            {activeTab === 'saved' && <SavedJobs />}
            {activeTab === 'resume' && <Resume />}
            {activeTab === 'settings' && <Settings user={user} />}
          </div>
        </div>
      </div>
    </div>
  );
}