CREATE TABLE `caption_prev_versions` (
	`post_id` text NOT NULL,
	`version` integer NOT NULL,
	`content` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `follows` (
	`follower_id` text NOT NULL,
	`following_id` text NOT NULL,
	FOREIGN KEY (`follower_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`following_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `media` (
	`id` text PRIMARY KEY NOT NULL,
	`post_id` text NOT NULL,
	`size` integer NOT NULL,
	`type` text NOT NULL,
	`original_height` integer NOT NULL,
	`original_width` integer NOT NULL,
	`source_url` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `post_hash_tags` (
	`post_id` text NOT NULL,
	`hash_tag` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `post_tags` (
	`post_id` text NOT NULL,
	`tag` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`like_count` integer NOT NULL,
	`audio` text,
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
	`caption_has_translation` integer,
	`caption_translation_original_language` text,
	`caption_translation_to_en` text,
	`caption_plain_text` text,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `reels` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`content` blob NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `stories` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`content` blob NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user_chats` (
	`user_id` text NOT NULL,
	`chat_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user_notifications` (
	`user_id` text NOT NULL,
	`notification_id` text NOT NULL,
	`seen` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`full_name` text NOT NULL,
	`bio` text,
	`has_active_stories` integer NOT NULL,
	`unread_messages` integer NOT NULL,
	`profile_picture` blob
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);