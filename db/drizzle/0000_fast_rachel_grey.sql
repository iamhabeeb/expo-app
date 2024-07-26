CREATE TABLE `EXPO__follows` (
	`follower_id` text NOT NULL,
	`following_id` text NOT NULL,
	FOREIGN KEY (`follower_id`) REFERENCES `EXPO__users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`following_id`) REFERENCES `EXPO__users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
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
	`firstname` text,
	`lastname` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`image_url` text,
	`bio` text,
	`has_active_stories` integer DEFAULT false NOT NULL,
	`unread_messages` integer,
	`profile_picture` text,
	`email_verified` integer DEFAULT false
);
--> statement-breakpoint
CREATE UNIQUE INDEX `EXPO__post_id_unique` ON `EXPO__post` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `EXPO__users_username_unique` ON `EXPO__users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `EXPO__users_email_unique` ON `EXPO__users` (`email`);