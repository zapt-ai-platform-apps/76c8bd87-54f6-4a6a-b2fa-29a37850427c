import React, { useState } from 'react';
import LoadingSpinner from '@/modules/core/components/LoadingSpinner';

export default function Settings({ user }) {
  const [isSaving, setIsSaving] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    jobAlerts: true,
    applicationUpdates: true,
    marketingEmails: false,
  });
  
  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 1000);
  };
  
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Settings</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Email Preferences</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                <p className="text-xs text-gray-500">Receive emails about your account activity</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={() => handleToggle('emailNotifications')}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full ${settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-300'} transition`}>
                  <div className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform transform ${settings.emailNotifications ? 'translate-x-5' : ''}`}></div>
                </div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Job Alerts</h4>
                <p className="text-xs text-gray-500">Receive emails about new job postings that match your interests</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox"
                  checked={settings.jobAlerts}
                  onChange={() => handleToggle('jobAlerts')}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full ${settings.jobAlerts ? 'bg-blue-600' : 'bg-gray-300'} transition`}>
                  <div className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform transform ${settings.jobAlerts ? 'translate-x-5' : ''}`}></div>
                </div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Application Updates</h4>
                <p className="text-xs text-gray-500">Receive emails when there are updates to your job applications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox"
                  checked={settings.applicationUpdates}
                  onChange={() => handleToggle('applicationUpdates')}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full ${settings.applicationUpdates ? 'bg-blue-600' : 'bg-gray-300'} transition`}>
                  <div className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform transform ${settings.applicationUpdates ? 'translate-x-5' : ''}`}></div>
                </div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Marketing Emails</h4>
                <p className="text-xs text-gray-500">Receive emails about Jobapp features, tips, and special offers</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox"
                  checked={settings.marketingEmails}
                  onChange={() => handleToggle('marketingEmails')}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full ${settings.marketingEmails ? 'bg-blue-600' : 'bg-gray-300'} transition`}>
                  <div className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform transform ${settings.marketingEmails ? 'translate-x-5' : ''}`}></div>
                </div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
          
          <p className="text-sm text-gray-600 mb-4">
            Email: {user?.email || 'Not available'}
          </p>
          
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
            onClick={() => alert('Change password functionality not implemented in this demo')}
          >
            Change Password
          </button>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Privacy</h3>
          
          <p className="text-sm text-gray-600 mb-4">
            Review our <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a> and <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a>
          </p>
          
          <button
            type="button"
            className="px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50 cursor-pointer"
            onClick={() => alert('Delete account functionality not implemented in this demo')}
          >
            Delete Account
          </button>
        </div>
        
        <div className="pt-4 flex justify-end">
          <button
            type="button"
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <div className="flex items-center">
                <LoadingSpinner size="sm" />
                <span className="ml-2">Saving...</span>
              </div>
            ) : (
              "Save Settings"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}