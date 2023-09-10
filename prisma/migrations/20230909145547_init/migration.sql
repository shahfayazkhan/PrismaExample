/*
  Warnings:

  - You are about to drop the column `wifePassword` on the `house` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `House_buildById_fkey` ON `house`;

-- DropIndex
DROP INDEX `House_ownerId_fkey` ON `house`;

-- AlterTable
ALTER TABLE `house` DROP COLUMN `wifePassword`,
    ADD COLUMN `wifiPassword` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `House` ADD CONSTRAINT `House_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `House` ADD CONSTRAINT `House_buildById_fkey` FOREIGN KEY (`buildById`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
