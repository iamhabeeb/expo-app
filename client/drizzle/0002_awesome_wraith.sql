CREATE TABLE `EXPO__media` (
	`id` text PRIMARY KEY NOT NULL,
	`post_id` text NOT NULL,
	`user_id` text NOT NULL,
	`size` integer NOT NULL,
	`type` text NOT NULL,
	`original_height` integer NOT NULL,
	`original_width` integer NOT NULL,
	`source_url` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `EXPO__post`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `EXPO__users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `EXPO__post` (
	`id` text NOT NULL,
	`userId` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`likes` blob,
	`comment_disabled` integer DEFAULT false,
	`caption_text` text,
	`caption_editted` integer,
	`caption_available` integer NOT NULL,
	`caption_created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`caption_editted_at` text DEFAULT (CURRENT_TIMESTAMP),
	`is_post_unavailable` integer NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `EXPO__users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `EXPO__users` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`full_name` text NOT NULL,
	`bio` text,
	`has_active_stories` integer DEFAULT false NOT NULL,
	`unread_messages` integer,
	`profile_picture` text
);
--> statement-breakpoint
DROP TABLE `expo__follows`;--> statement-breakpoint
DROP TABLE `expo__media`;--> statement-breakpoint
DROP TABLE `expo__post_hash_tags`;--> statement-breakpoint
DROP TABLE `expo__post_tags`;--> statement-breakpoint
DROP TABLE `expo__posts`;--> statement-breakpoint
DROP TABLE `expo__reels`;--> statement-breakpoint
DROP TABLE `expo__stories`;--> statement-breakpoint
DROP TABLE `expo__user_chats`;--> statement-breakpoint
DROP TABLE `expo__user_notifications`;--> statement-breakpoint
DROP TABLE `expo__users`;--> statement-breakpoint
ALTER TABLE `expo__caption_prev_versions` RENAME TO `EXPO__follows`;--> statement-breakpoint
/*
 SQLite does not support "Dropping foreign key" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html

 Due to that we don't generate migration automatically and it has to be done manually
*/--> statement-breakpoint
ALTER TABLE `EXPO__follows` ADD `follower_id` text NOT NULL REFERENCES EXPO__users(id);--> statement-breakpoint
ALTER TABLE `EXPO__follows` ADD `following_id` text NOT NULL REFERENCES EXPO__users(id);--> statement-breakpoint
CREATE UNIQUE INDEX `EXPO__post_id_unique` ON `EXPO__post` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `EXPO__users_username_unique` ON `EXPO__users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `EXPO__users_email_unique` ON `EXPO__users` (`email`);--> statement-breakpoint
/*
 SQLite does not support "Creating foreign key on existing column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html

 Due to that we don't generate migration automatically and it has to be done manually
*/--> statement-breakpoint
ALTER TABLE `EXPO__follows` DROP COLUMN `post_id`;--> statement-breakpoint
ALTER TABLE `EXPO__follows` DROP COLUMN `version`;--> statement-breakpoint
ALTER TABLE `EXPO__follows` DROP COLUMN `content`;