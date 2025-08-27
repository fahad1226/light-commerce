import { relations } from "drizzle-orm";
import {
    boolean,
    integer,
    pgTable,
    text,
    timestamp,
    uuid,
} from "drizzle-orm/pg-core";

// Users table for authentication
export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    email: text("email").notNull().unique(),
    name: text("name"),
    image: text("image"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Products table for light bulbs
export const products = pgTable("products", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    description: text("description").notNull(),
    price: text("price").notNull(),
    image: text("image").notNull(),
    category: text("category").notNull(),
    wattage: integer("wattage"),
    colorTemperature: text("color_temperature"),
    lumens: integer("lumens"),
    isAvailable: boolean("is_available").default(true).notNull(),
    stockQuantity: integer("stock_quantity").default(0).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
    // Add relations here if needed
}));

export const productsRelations = relations(products, ({ many }) => ({
    // Add relations here if needed
}));
