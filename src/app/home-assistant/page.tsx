'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

const HOME_ASSISTANT_URL = 'http://192.168.1.101:8123';
const HA_TOKEN = process.env.NEXT_PUBLIC_HA_TOKEN;

export default function HomeAssistant() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const [isFrameLoaded, setIsFrameLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [haUrl, setHaUrl] = useState<string | null>(null);

  // Debug log
  useEffect(() => {
    console.log('Environment check:', {
      hasToken: !!HA_TOKEN,
      url: HOME_ASSISTANT_URL
    });
  }, []);

  // Protect the route
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [user, isLoading, router]);

  // Set up Home Assistant URL with authentication
  useEffect(() => {
    if (!HA_TOKEN) {
      setError('Home Assistant token not configured. Please check your environment variables.');
      return;
    }

    // Test Home Assistant connectivity
    fetch(`${HOME_ASSISTANT_URL}/api/`, {
      headers: {
        Authorization: `Bearer ${HA_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text();
          console.error('Home Assistant response:', text);
          throw new Error(`Failed to connect to Home Assistant: ${response.status}`);
        }
        // If successful, set up the authenticated URL
        setHaUrl(`${HOME_ASSISTANT_URL}?auth_callback=1&access_token=${HA_TOKEN}`);
        setError(null);
      })
      .catch((err) => {
        console.error('Home Assistant connection error:', err);
        setError(`Unable to connect to Home Assistant. Error: ${err.message}`);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-20">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      </div>
    );
  }
  
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-6">Home Assistant Dashboard</h1>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
            <p className="font-semibold">{error}</p>
            <div className="text-sm mt-2">
              <p className="font-medium mb-1">Troubleshooting steps:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Verify Home Assistant is running at {HOME_ASSISTANT_URL}</li>
                <li>Check if the access token is correctly configured in .env.local</li>
                <li>Add this to your Home Assistant configuration.yaml:
                  <pre className="mt-1 bg-black/30 p-2 rounded text-xs overflow-x-auto">
                    {`http:
  cors_allowed_origins:
    - http://localhost:3000
  use_x_forwarded_for: true
  trusted_proxies:
    - 127.0.0.1
    - ::1`}
                  </pre>
                </li>
                <li>Restart Home Assistant after making these changes</li>
              </ol>
            </div>
          </div>
        )}

        {/* Home Assistant iframe */}
        {haUrl && (
          <div className="relative w-full" style={{ height: 'calc(100vh - 160px)' }}>
            <iframe
              src={haUrl}
              className={`w-full h-full rounded-lg shadow-lg transition-opacity duration-300 ${
                isFrameLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => {
                setIsFrameLoaded(true);
                setError(null);
              }}
            />
            {!isFrameLoaded && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
