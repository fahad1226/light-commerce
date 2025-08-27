import { db } from "./index";
import { products } from "./schema";

const sampleProducts = [
    {
        name: "LED A19 Bulb - Warm White",
        description:
            "Energy-efficient LED bulb with warm white light, perfect for living rooms and bedrooms. 60W equivalent with 800 lumens.",
        price: "12.99",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        category: "LED",
        wattage: 9,
        colorTemperature: "2700K",
        lumens: 800,
        isAvailable: true,
        stockQuantity: 50,
    },
    {
        name: "LED A19 Bulb - Daylight",
        description:
            "Bright daylight LED bulb ideal for kitchens and workspaces. 75W equivalent with 1100 lumens.",
        price: "14.99",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        category: "LED",
        wattage: 11,
        colorTemperature: "5000K",
        lumens: 1100,
        isAvailable: true,
        stockQuantity: 35,
    },
    {
        name: "Smart LED Bulb - WiFi",
        description:
            "Smart LED bulb with WiFi connectivity, controllable via smartphone app. 60W equivalent with adjustable color temperature.",
        price: "29.99",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        category: "Smart LED",
        wattage: 9,
        colorTemperature: "Adjustable",
        lumens: 800,
        isAvailable: true,
        stockQuantity: 25,
    },
    {
        name: "LED PAR38 Floodlight",
        description:
            "High-output LED floodlight perfect for outdoor lighting and security. 90W equivalent with 1200 lumens.",
        price: "24.99",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        category: "LED",
        wattage: 15,
        colorTemperature: "4000K",
        lumens: 1200,
        isAvailable: true,
        stockQuantity: 20,
    },
    {
        name: "LED Strip Light - RGB",
        description:
            "Flexible RGB LED strip with remote control, perfect for accent lighting and mood setting.",
        price: "19.99",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        category: "LED Strip",
        wattage: 24,
        colorTemperature: "RGB",
        lumens: 1000,
        isAvailable: true,
        stockQuantity: 30,
    },
    {
        name: "Compact Fluorescent Bulb",
        description:
            "Energy-saving CFL bulb with warm white light. 23W with 1600 lumens output.",
        price: "8.99",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        category: "CFL",
        wattage: 23,
        colorTemperature: "2700K",
        lumens: 1600,
        isAvailable: true,
        stockQuantity: 40,
    },
    {
        name: "Halogen Bulb - MR16",
        description:
            "High-quality halogen bulb for track lighting and accent lighting. 50W with crisp white light.",
        price: "6.99",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        category: "Halogen",
        wattage: 50,
        colorTemperature: "3000K",
        lumens: 600,
        isAvailable: true,
        stockQuantity: 60,
    },
    {
        name: "LED Tube Light - T8",
        description:
            "Direct replacement LED tube for fluorescent fixtures. 18W with 2200 lumens.",
        price: "16.99",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        category: "LED Tube",
        wattage: 18,
        colorTemperature: "4000K",
        lumens: 2200,
        isAvailable: true,
        stockQuantity: 45,
    },
];

export async function seedProducts() {
    try {
        console.log("Seeding products...");

        // Clear existing products
        await db.delete(products);

        // Insert new products
        const insertedProducts = await db
            .insert(products)
            .values(sampleProducts)
            .returning();

        console.log(`Successfully seeded ${insertedProducts.length} products`);
        return insertedProducts;
    } catch (error) {
        console.error("Error seeding products:", error);
        throw error;
    }
}

// Run seeding if this file is executed directly
if (require.main === module) {
    seedProducts()
        .then(() => {
            console.log("Seeding completed");
            process.exit(0);
        })
        .catch((error) => {
            console.error("Seeding failed:", error);
            process.exit(1);
        });
}
