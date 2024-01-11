/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `albums` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `posts` MODIFY `content` TEXT NOT NULL,
    MODIFY `published` BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX `albums_name_key` ON `albums`(`name`);
