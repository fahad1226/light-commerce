"use client";

import { getAllProducts } from "@/lib/services/products";
import { useAppStore } from "@/lib/store";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductsGrid() {
    const { products, setProducts, isLoading, setLoading } = useAppStore();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const fetchedProducts = await getAllProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [setProducts, setLoading]);

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
                    >
                        <div className="h-48 bg-gray-200"></div>
                        <div className="p-4">
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-6 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded mb-4"></div>
                            <div className="flex justify-between items-center">
                                <div className="h-6 bg-gray-200 rounded w-16"></div>
                                <div className="h-8 bg-gray-200 rounded w-24"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No products found
                </h3>
                <p className="text-gray-500">
                    Try refreshing the page or check back later.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
