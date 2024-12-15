import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export default withMiddlewareAuthRequired({
  returnTo: '/api/auth/login',
});

export const config = {
  matcher: [
    '/property-management/:path*',
    '/dashboard/:path*',
    '/settings/:path*',
    '/api/private/:path*',
  ],
};
