CREATE TABLE `todo_list_entries` (
	`id` text PRIMARY KEY NOT NULL,
	`item_id` text NOT NULL,
	`date` integer NOT NULL,
	FOREIGN KEY (`item_id`) REFERENCES `todo_list_items`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `todo_list_items` ADD `item_type` text NOT NULL;