-- DropIndex
DROP INDEX `comments_postId_key` ON `comments`;

-- DropIndex
DROP INDEX `comments_userId_key` ON `comments`;

-- CreateIndex
CREATE INDEX `comments_postId_idx` ON `comments`(`postId`);

-- CreateIndex
CREATE INDEX `comments_userId_idx` ON `comments`(`userId`);
