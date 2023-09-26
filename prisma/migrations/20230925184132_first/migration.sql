-- CreateTable
CREATE TABLE `Answer` (
    `id` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `start_date` VARCHAR(191) NOT NULL,
    `preferred_language` VARCHAR(191) NOT NULL,
    `how_found` VARCHAR(191) NOT NULL,
    `newsletter_subscription` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
