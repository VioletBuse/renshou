import {sqliteTable, text, integer} from "drizzle-orm/sqlite-core"

export const todo_list_items = sqliteTable("todo_list_items", {
	id: text("id").notNull().primaryKey(),
	name: text("name").notNull(),
	item_type: text("item_type").notNull()
})

export const todo_list_entries = sqliteTable("todo_list_entries", {
	id: text("id").notNull().primaryKey(),
	item_id: text("item_id").notNull().references(() => todo_list_items.id),
	date: integer("date", {mode: "timestamp"}).notNull()
})
