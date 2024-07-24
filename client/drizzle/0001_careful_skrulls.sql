CREATE TABLE `expo__caption_prev_versions` (
	`post_id` text NOT NULL,
	`version` integer NOT NULL,
	`content` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `expo__posts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `expo__follows` (
	`follower_id` text NOT NULL,
	`following_id` text NOT NULL,
	FOREIGN KEY (`follower_id`) REFERENCES `expo__users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`following_id`) REFERENCES `expo__users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `expo__media` (
	`id` text PRIMARY KEY NOT NULL,
	`post_id` text NOT NULL,
	`size` integer NOT NULL,
	`type` text NOT NULL,
	`original_height` integer NOT NULL,
	`original_width` integer NOT NULL,
	`source_url` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `expo__posts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `expo__post_hash_tags` (
	`post_id` text NOT NULL,
	`hash_tag` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `expo__posts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `expo__post_tags` (
	`post_id` text NOT NULL,
	`tag` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `expo__posts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `expo__posts` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text NOT NULL,
	`like_count` integer NOT NULL,
	`has_liked` integer,
	`like_and_view_counts_disabled` integer NOT NULL,
	`comment_disabled` integer NOT NULL,
	`is_post_unavailable` integer NOT NULL,
	`direct_reply_count` integer NOT NULL,
	`repost_count` integer NOT NULL,
	`can_reply` integer NOT NULL,
	`quote_count` integer NOT NULL,
	`is_reply` integer NOT NULL,
	`caption_available` integer NOT NULL,
	`caption_created_at` text,
	`caption_editted_at` text,
	`caption_editted` integer,
	`caption_plain_text` text,
	FOREIGN KEY (`user_id`) REFERENCES `expo__users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `expo__reels` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`content` blob NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `expo__users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `expo__stories` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`content` blob NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `expo__users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `expo__user_chats` (
	`user_id` text NOT NULL,
	`chat_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `expo__users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `expo__user_notifications` (
	`user_id` text NOT NULL,
	`notification_id` text NOT NULL,
	`seen` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `expo__users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `expo__users` (
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
DROP TABLE `caption_prev_versions`;--> statement-breakpoint
DROP TABLE `follows`;--> statement-breakpoint
DROP TABLE `media`;--> statement-breakpoint
DROP TABLE `post_hash_tags`;--> statement-breakpoint
DROP TABLE `post_tags`;--> statement-breakpoint
DROP TABLE `posts`;--> statement-breakpoint
DROP TABLE `reels`;--> statement-breakpoint
DROP TABLE `stories`;--> statement-breakpoint
DROP TABLE `user_chats`;--> statement-breakpoint
DROP TABLE `user_notifications`;--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
CREATE UNIQUE INDEX `expo__users_username_unique` ON `expo__users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `expo__users_email_unique` ON `expo__users` (`email`);