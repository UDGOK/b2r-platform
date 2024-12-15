'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

const HOME_ASSISTANT_URL = process.env.NEXT_PUBLIC_HOME_ASSISTANT_URL || 'http://192.168.1.101:8123';

export default function HomeAssistant() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const [isFrameLoaded, setIsFrameLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Protect the route
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [user, isLoading, router]);

  const handleFrameError = () => {
    setError('Unable to connect to Home Assistant. Please make sure it is running and accessible.');
    setIsFrameLoaded(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-6">Home Assistant Dashboard</h1>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Home Assistant iframe */}
        <div className="relative w-full" style={{ height: 'calc(100vh - 160px)' }}>
          <iframe
            src={HOME_ASSISTANT_URL}
            className={`w-full h-full rounded-lg shadow-lg transition-opacity duration-300 ${
              isFrameLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => {
              setIsFrameLoaded(true);
              setError(null);
            }}
            onError={handleFrameError}
          />
          {!isFrameLoaded && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
