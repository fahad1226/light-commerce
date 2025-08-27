import { asc, desc, eq } from "drizzle-orm";
import { db } from "../db";
import { products } from "../db/schema";

export async function getAllProducts() {
    try {
        const allProducts = await db
            .select()
            .from(products)
            .orderBy(desc(products.createdAt));
        return allProducts;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

export async function getProductById(id: string) {
    try {
        const product = await db
            .select()
            .from(products)
            .where(eq(products.id, id))
            .limit(1);
        return product[0] || null;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        throw error;
    }
}

export async function getProductsByCategory(category: string) {
    try {
        const categoryProducts = await db
            .select()
            .from(products)
            .where(eq(products.category, category))
            .orderBy(asc(products.name));
        return categoryProducts;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        throw error;
    }
}

export async function getAvailableProducts() {
    try {
        const availableProducts = await db
            .select()
            .from(products)
            .where(eq(products.isAvailable, true))
            .orderBy(desc(products.createdAt));
        return availableProducts;
    } catch (error) {
        console.error("Error fetching available products:", error);
        throw error;
    }
}

export async function searchProducts(query: string) {
    try {
        const allProducts = await getAllProducts();
        const searchResults = allProducts.filter(
            (product) =>
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.description.toLowerCase().includes(query.toLowerCase())
        );
        return searchResults;
    } catch (error) {
        console.error("Error searching products:", error);
        throw error;
    }
}
