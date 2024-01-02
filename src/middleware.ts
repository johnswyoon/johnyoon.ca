import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhooks',
    '/photography',
    '/about',
    '/blog',
    '/api/uploadthing',
    '/api/posts',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)', '/admin'],
};
