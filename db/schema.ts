import {sqliteTable, text} from "drizzle-orm/sqlite-core"

export const todo_list_items = sqliteTable("todo_list_items", {
	id: text("id").notNull().primaryKey(),
	name: text("name").notNull()
})
