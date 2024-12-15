'use client';

import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthRedirect() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && user && pathname === '/') {
      router.push('/management');
    }
  }, [user, isLoading, router, pathname]);

  return null;
}
