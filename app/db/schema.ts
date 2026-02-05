import {
  date,
  integer,
  pgTable,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
  text,
  serial,
  
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name",{ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar("email",{ length: 255 }).notNull().unique(),
});

export const appointments = pgTable(
  "appointments",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    appointmentDate: date("appointment_date").notNull(),
    appointmentTime: date("appointment_time").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    uniqueSlot: uniqueIndex("unique_slot").on(
      table.appointmentDate,
      table.appointmentTime
    ),
  })
);

export const dentistSlides = pgTable("dentistSlides", {
    id: serial("id").primaryKey(),
  name: varchar("name",{ length: 255 }).notNull(),
  role: varchar("role",{ length: 255 }).notNull(),
imageUrl:text("image_url").notNull(),
  quote: text("quote").notNull(),
displayOrder: integer("display_order").notNull(),
createdAt: timestamp("created_at").defaultNow().notNull(),
});