import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhooks',
    '/photography',
    '/about',
    '/blog',
    '/blog/(.*)',
    '/api/uploadthing',
    '/api/comment/(.*)',
    '/api/post',
    '/api/post/(.*)',
    '/api/posts',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)', '/admin'],
};
