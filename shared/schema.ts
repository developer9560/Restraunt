import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  guests: text("guests").notNull(),
  requests: text("requests"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

// Create base schemas
const baseInsertUserSchema = createInsertSchema(users);
const baseInsertReservationSchema = createInsertSchema(reservations);
const baseInsertContactSchema = createInsertSchema(contacts);

// Define final schemas with validation
export const insertUserSchema = baseInsertUserSchema.pick({
  username: true,
  password: true,
});

export const insertReservationSchema = baseInsertReservationSchema
  .extend({
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(7, "Please enter a valid phone number"),
    date: z.string().min(1, "Please select a date"),
    time: z.string().min(1, "Please select a time"),
    guests: z.string().min(1, "Please select number of guests"),
  })
  .omit({
    id: true,
    createdAt: true
  });

export const insertContactSchema = baseInsertContactSchema
  .extend({
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(5, "Message must be at least 5 characters")
  })
  .omit({
    id: true,
    createdAt: true
  });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertReservation = z.infer<typeof insertReservationSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type User = typeof users.$inferSelect;
export type Reservation = typeof reservations.$inferSelect;
export type Contact = typeof contacts.$inferSelect;
