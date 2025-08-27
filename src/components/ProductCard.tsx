"use client";

import { Product, useAppStore } from "@/lib/store";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useAppStore();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {!product.isAvailable && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-semibold">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>

            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {product.category}
                    </span>
                    <span className="text-sm text-gray-500">
                        {product.wattage}W
                    </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                        {product.colorTemperature && (
                            <span className="text-xs text-gray-500">
                                {product.colorTemperature}
                            </span>
                        )}
                        {product.lumens && (
                            <span className="text-xs text-gray-500">
                                {product.lumens} lumens
                            </span>
                        )}
                    </div>
                    <span className="text-sm text-gray-500">
                        Stock: {product.stockQuantity}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                        ${Number(product.price).toFixed(2)}
                    </span>
                    <button
                        onClick={handleAddToCart}
                        disabled={
                            !product.isAvailable || product.stockQuantity === 0
                        }
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
