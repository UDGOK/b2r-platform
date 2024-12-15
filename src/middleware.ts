import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

// Only protect dashboard routes initially
export default withMiddlewareAuthRequired({
  returnTo: '/api/auth/login',
});

export const config = {
  matcher: [
    '/dashboard/:path*',
  ],
};
