import { pgTable, uuid, text, integer, boolean, timestamp, index } from "drizzle-orm/pg-core";

const createdAt = timestamp("createdAt").notNull().defaultNow();
const updatedAt = timestamp("updatedAt").notNull().defaultNow().$onUpdate(() => new Date());

export const EventTable = pgTable("events", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    description: text("description"),
    durationInMinutes: integer("durationInMinutes").notNull(),
    clerkUserId: text("clerkUserId").notNull(),
    isActive: boolean("isActive").notNull().default(true),
    createdAt,
    updatedAt,
}, table => ({
    clerkUserIdIndex: index("clerkUserIdIndex").on(table.clerkUserId),	
}))

export const ScheduleTable = pgTable("schedules", {
    id: uuid("id").primaryKey().defaultRandom(),
    timezone: text("timezone").notNull(),
    clerkUserId: text("clerkUserId").notNull(),
    createdAt,
    updatedAt,
})


export const ScheduleAvailabilityTable = pgTable("scheduleAvailabilities", {
    id: uuid("id").primaryKey().defaultRandom(),
    scheduleId: uuid("scheduleId").notNull().references(() => ScheduleTable.id),
})