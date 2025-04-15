import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/supabaseClient';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import ZaptBadge from '@/modules/core/components/ZaptBadge';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  
  const from = location.state?.from?.pathname || '/';
  
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=96&height=96" 
            alt="Jobapp Logo" 
            className="mx-auto h-16 w-16 mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Jobapp</h1>
          <p className="text-gray-600 mt-2">Find your dream job today</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-4">
            <a 
              href="https://www.zapt.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 font-medium"
            >
              Sign in with ZAPT
            </a>
          </div>
          
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#0a66c2',
                    brandAccent: '#0073b1',
                  },
                },
              },
            }}
            providers={['google', 'facebook', 'apple']}
            magicLink={true}
            view="magic_link"
          />
        </div>
        
        <div className="mt-8 text-center">
          <ZaptBadge />
        </div>
      </div>
    </div>
  );
}