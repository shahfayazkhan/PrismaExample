-- DropIndex
DROP INDEX `House_buildById_fkey` ON `house`;

-- DropIndex
DROP INDEX `House_ownerId_fkey` ON `house`;

-- AddForeignKey
ALTER TABLE `House` ADD CONSTRAINT `House_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `House` ADD CONSTRAINT `House_buildById_fkey` FOREIGN KEY (`buildById`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
