"use client";

import clsx from "clsx";
import {
    CheckCircleIcon,
    EyeIcon,
    HeartIcon,
    LightbulbIcon,
    PaletteIcon,
    RulerIcon,
    Share2Icon,
    ShoppingCartIcon,
    StarIcon,
    TruckIcon,
    ZapIcon,
} from "lucide-react";
import { useState } from "react";

const product = {
    name: "Aurora Modern Pendant Light",
    href: "#",
    price: "$299",
    originalPrice: "$399",
    discount: "25% OFF",
    description:
        "Transform your space with this stunning modern pendant light featuring a frosted glass diffuser and brushed brass finish. Perfect for dining rooms, kitchens, or as a statement piece in any contemporary interior.",
    imageSrc:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Modern pendant light with frosted glass and brass finish",
    images: [
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    breadcrumbs: [
        { id: 1, name: "Lighting", href: "#" },
        { id: 2, name: "Pendant Lights", href: "#" },
        { id: 3, name: "Modern", href: "#" },
    ],
    specifications: {
        dimensions: 'Diameter: 18" | Height: 24" | Cord Length: 72"',
        material: "Brushed Brass, Frosted Glass",
        bulbType: "E26 Base (Bulb not included)",
        wattage: "Max 100W",
        voltage: "120V",
        certification: "UL Listed, ETL Certified",
        warranty: "3 Years Limited Warranty",
    },
    finishes: [
        {
            name: "Brushed Brass",
            description: "Warm, luxurious finish",
            color: "#B8860B",
            inStock: true,
        },
        {
            name: "Matte Black",
            description: "Modern, sleek appearance",
            color: "#2C2C2C",
            inStock: true,
        },
        {
            name: "Polished Nickel",
            description: "Contemporary, elegant look",
            color: "#C0C0C0",
            inStock: false,
        },
    ],
    bulbOptions: [
        {
            name: "LED Edison",
            description: "Vintage aesthetic, energy efficient",
            price: "$25",
            inStock: true,
        },
        {
            name: "Smart LED",
            description: "WiFi controlled, 16M colors",
            price: "$45",
            inStock: true,
        },
        {
            name: "Standard LED",
            description: "Clean, bright illumination",
            price: "$15",
            inStock: true,
        },
    ],
};

const policies = [
    {
        name: "Free Shipping",
        description: "Free standard shipping on orders over $100",
        icon: TruckIcon,
        color: "text-blue-600",
    },
    {
        name: "Easy Returns",
        description: "30-day hassle-free returns",
        icon: CheckCircleIcon,
        color: "text-green-600",
    },
    {
        name: "Expert Support",
        description: "Lighting specialists available 24/7",
        icon: ZapIcon,
        color: "text-yellow-600",
    },
    {
        name: "Installation Guide",
        description: "Step-by-step setup instructions",
        icon: EyeIcon,
        color: "text-purple-600",
    },
];

const reviews = {
    average: 4.8,
    totalCount: 1247,
    counts: [
        { rating: 5, count: 892 },
        { rating: 4, count: 234 },
        { rating: 3, count: 89 },
        { rating: 2, count: 23 },
        { rating: 1, count: 9 },
    ],
    featured: [
        {
            id: 1,
            rating: 5,
            content:
                "Absolutely stunning pendant light! The quality is exceptional and it creates the perfect ambiance in our dining room. Installation was straightforward and the brass finish is gorgeous.",
            author: "Sarah Chen",
            avatarSrc:
                "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
            verified: true,
            date: "2 days ago",
        },
        {
            id: 2,
            rating: 5,
            content:
                "This light exceeded all expectations. The frosted glass diffuses light beautifully and the brass finish adds warmth to our modern kitchen. Highly recommend!",
            author: "Michael Rodriguez",
            avatarSrc:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
            verified: true,
            date: "1 week ago",
        },
        {
            id: 3,
            rating: 4,
            content:
                "Beautiful design and great quality. The only reason I didn't give 5 stars is that the cord length was slightly shorter than expected, but still works perfectly for our space.",
            author: "Emma Thompson",
            avatarSrc:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
            verified: true,
            date: "2 weeks ago",
        },
    ],
};

function SingleProduct() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedFinish, setSelectedFinish] = useState(product.finishes[0]);
    const [selectedBulb, setSelectedBulb] = useState(product.bulbOptions[0]);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Header with breadcrumbs */}
            <div className="bg-white border-b border-gray-100">
                <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-4">
                    <nav aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2 text-sm">
                            {product.breadcrumbs.map(
                                (breadcrumb, breadcrumbIdx) => (
                                    <li
                                        key={breadcrumb.id}
                                        className="flex items-center"
                                    >
                                        <a
                                            href={breadcrumb.href}
                                            className="text-gray-500 hover:text-gray-700 transition-colors"
                                        >
                                            {breadcrumb.name}
                                        </a>
                                        {breadcrumbIdx !==
                                            product.breadcrumbs.length - 1 && (
                                            <svg
                                                className="mx-2 h-4 w-4 text-gray-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                            </svg>
                                        )}
                                    </li>
                                )
                            )}
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Main product section */}
            <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product images */}
                    <div className="space-y-4">
                        <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                                        selectedImage === index
                                            ? "border-indigo-600 ring-2 ring-indigo-200"
                                            : "border-gray-200 hover:border-gray-300"
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} view ${
                                            index + 1
                                        }`}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product details */}
                    <div className="space-y-8">
                        {/* Product header */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
                                    {product.discount}
                                </span>
                                <span className="text-sm text-gray-500">
                                    Limited time offer
                                </span>
                            </div>

                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={clsx(
                                                    reviews.average > rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-300",
                                                    "h-5 w-5"
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">
                                        {reviews.average} ({reviews.totalCount}{" "}
                                        reviews)
                                    </span>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <HeartIcon className="h-6 w-6" />
                                </button>
                                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <Share2Icon className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="flex items-baseline gap-3 mb-6">
                                <span className="text-4xl font-bold text-gray-900">
                                    {product.price}
                                </span>
                                <span className="text-xl text-gray-500 line-through">
                                    {product.originalPrice}
                                </span>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Finish selection */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <PaletteIcon className="h-5 w-5 text-indigo-600" />
                                Choose Finish
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {product.finishes.map((finish) => (
                                    <button
                                        key={finish.name}
                                        onClick={() =>
                                            setSelectedFinish(finish)
                                        }
                                        disabled={!finish.inStock}
                                        className={`relative p-4 rounded-xl border-2 transition-all duration-200 ${
                                            selectedFinish.name === finish.name
                                                ? "border-indigo-600 ring-2 ring-indigo-200 bg-indigo-50"
                                                : "border-gray-200 hover:border-gray-300"
                                        } ${
                                            !finish.inStock
                                                ? "opacity-50 cursor-not-allowed"
                                                : ""
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                                                style={{
                                                    backgroundColor:
                                                        finish.color,
                                                }}
                                            />
                                            <div className="text-left">
                                                <div className="font-medium text-gray-900">
                                                    {finish.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {finish.description}
                                                </div>
                                            </div>
                                        </div>
                                        {!finish.inStock && (
                                            <span className="absolute top-2 right-2 text-xs text-red-600 font-medium">
                                                Out of Stock
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Bulb selection */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <LightbulbIcon className="h-5 w-5 text-indigo-600" />
                                Bulb Options
                            </h3>
                            <div className="space-y-3">
                                {product.bulbOptions.map((bulb) => (
                                    <button
                                        key={bulb.name}
                                        onClick={() => setSelectedBulb(bulb)}
                                        className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                                            selectedBulb.name === bulb.name
                                                ? "border-indigo-600 ring-2 ring-indigo-200 bg-indigo-50"
                                                : "border-gray-200 hover:border-gray-300"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-medium text-gray-900">
                                                    {bulb.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {bulb.description}
                                                </div>
                                            </div>
                                            <span className="font-semibold text-gray-900">
                                                {bulb.price}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity and add to cart */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <label className="text-sm font-medium text-gray-700">
                                    Quantity:
                                </label>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <button
                                        onClick={() =>
                                            setQuantity(
                                                Math.max(1, quantity - 1)
                                            )
                                        }
                                        className="p-2 hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="sr-only">
                                            Decrease
                                        </span>
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M20 12H4"
                                            />
                                        </svg>
                                    </button>
                                    <span className="px-4 py-2 text-gray-900 font-medium">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() =>
                                            setQuantity(quantity + 1)
                                        }
                                        className="p-2 hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="sr-only">
                                            Increase
                                        </span>
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button className="flex-1 bg-indigo-600 text-white py-4 px-8 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                                    <ShoppingCartIcon className="h-5 w-5" />
                                    Add to Cart
                                </button>
                                <button className="bg-gray-100 text-gray-900 py-4 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        {/* Policies */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                            {policies.map((policy) => (
                                <div
                                    key={policy.name}
                                    className="flex items-start gap-3"
                                >
                                    <div className={`${policy.color} mt-1`}>
                                        <policy.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900">
                                            {policy.name}
                                        </h4>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {policy.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Specifications section */}
            <div className="bg-white border-t border-gray-100 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Product Specifications
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Everything you need to know about this stunning
                            pendant light
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(product.specifications).map(
                            ([key, value]) => (
                                <div key={key} className="text-center">
                                    <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <RulerIcon className="h-8 w-8 text-indigo-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2 capitalize">
                                        {key.replace(/([A-Z])/g, " $1").trim()}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {value}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Reviews section */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Reviews summary */}
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Customer Reviews
                            </h2>

                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-4xl font-bold text-gray-900">
                                        {reviews.average}
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={clsx(
                                                        reviews.average > rating
                                                            ? "text-yellow-400"
                                                            : "text-gray-300",
                                                        "h-5 w-5"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Based on {reviews.totalCount}{" "}
                                            reviews
                                        </p>
                                    </div>
                                </div>

                                {/* Rating breakdown */}
                                <div className="space-y-3">
                                    {reviews.counts.map((count) => (
                                        <div
                                            key={count.rating}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="text-sm font-medium text-gray-900 w-8">
                                                {count.rating}
                                            </span>
                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-yellow-400 h-2 rounded-full"
                                                    style={{
                                                        width: `${
                                                            (count.count /
                                                                reviews.totalCount) *
                                                            100
                                                        }%`,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-sm text-gray-600 w-12 text-right">
                                                {Math.round(
                                                    (count.count /
                                                        reviews.totalCount) *
                                                        100
                                                )}
                                                %
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full mt-6 bg-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
                                    Write a Review
                                </button>
                            </div>
                        </div>

                        {/* Featured reviews */}
                        <div className="lg:col-span-8">
                            <div className="space-y-8">
                                {reviews.featured.map((review) => (
                                    <div
                                        key={review.id}
                                        className="bg-white rounded-2xl p-6 shadow-sm"
                                    >
                                        <div className="flex items-start gap-4">
                                            <img
                                                src={review.avatarSrc}
                                                alt={review.author}
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h4 className="font-semibold text-gray-900">
                                                        {review.author}
                                                    </h4>
                                                    {review.verified && (
                                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                                            Verified
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="flex items-center">
                                                        {[0, 1, 2, 3, 4].map(
                                                            (rating) => (
                                                                <StarIcon
                                                                    key={rating}
                                                                    className={clsx(
                                                                        review.rating >
                                                                            rating
                                                                            ? "text-yellow-400"
                                                                            : "text-gray-300",
                                                                        "h-4 w-4"
                                                                    )}
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                    <span className="text-sm text-gray-500">
                                                        {review.date}
                                                    </span>
                                                </div>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {review.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related products section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            You Might Also Like
                        </h2>
                        <p className="text-lg text-gray-600">
                            Discover more stunning lighting options for your
                            space
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Placeholder for related products */}
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="group cursor-pointer">
                                <div className="aspect-square bg-gray-100 rounded-2xl mb-4 overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    Modern Chandelier
                                </h3>
                                <p className="text-gray-600 text-sm mb-2">
                                    Elegant crystal chandelier for dining rooms
                                </p>
                                <p className="font-semibold text-gray-900">
                                    $599
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SingleProduct;
