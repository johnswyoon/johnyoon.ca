import { auth } from '@clerk/nextjs';
import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  thumbnailUploader: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      // This code runs on your server before upload
      const { userId } = auth();

      // If you throw, the user will not be able to upload
      if (userId !== process.env.NEXT_PUBLIC_ADMIN_ID)
        throw new Error('Unauthorized');

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId };
    })
    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log('Thumbnail Upload Complete');

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return file.url;
    }),

  imageUploader: f({ image: { maxFileSize: '4MB', maxFileCount: 12 } })
    .middleware(async () => {
      const { userId } = auth();

      if (userId !== process.env.NEXT_PUBLIC_ADMIN_ID)
        throw new Error('Unauthorized');
      return { userId };
    })
    .onUploadComplete(async (data) => {
      console.log('Upload Complete');
      return data;
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
