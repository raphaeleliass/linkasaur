import { relations } from "drizzle-orm";
import {
	integer,
	pgTable,
	text,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";
import { userTable } from "./auth";

export const linkTable = pgTable("link", {
	id: uuid("id").primaryKey().defaultRandom().notNull(),
	title: varchar({ length: 255 }).notNull(),
	url: varchar({ length: 255 }).notNull(),
	index: integer().notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at")
		.defaultNow()
		.$onUpdate(() => /* @__PURE__ */ new Date())
		.notNull(),
	userId: text("user_id")
		.references(() => userTable.id, {
			onDelete: "cascade",
		})
		.notNull(),
});

export const userRelations = relations(userTable, ({ many }) => ({
	links: many(linkTable),
}));

export const linkRelations = relations(linkTable, ({ one }) => ({
	user: one(userTable, {
		fields: [linkTable.userId],
		references: [userTable.id],
	}),
}));
