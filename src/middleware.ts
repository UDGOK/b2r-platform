import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

// Temporarily disable auth middleware for development
export default function middleware() {
  return;
}

export const config = {
  matcher: []
};
