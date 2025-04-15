import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/modules/auth/AuthProvider';
import Layout from '@/modules/core/layout/Layout';
import HomePage from '@/modules/home/HomePage';
import JobsPage from '@/modules/jobs/JobsPage';
import JobDetailPage from '@/modules/jobs/JobDetailPage';
import ProfilePage from '@/modules/profile/ProfilePage';
import LoginPage from '@/modules/auth/LoginPage';
import ProtectedRoute from '@/modules/auth/ProtectedRoute';
import NotFoundPage from '@/modules/core/NotFoundPage';
import '@/modules/core/events';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="jobs" element={<JobsPage />} />
            <Route path="jobs/:id" element={<JobDetailPage />} />
            
            <Route path="profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}