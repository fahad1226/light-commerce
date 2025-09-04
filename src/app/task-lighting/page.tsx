import LightCollections from "@/components/shared/LightCollections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Task Lighting | Light Commerce",
    description:
        "Discover our premium collection of energy-efficient lighting solutions. From LED bulbs to smart lighting, we have everything to brighten your world.",
    keywords: ["Light Commerce", "Browse Lights", "Lights"],
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "Task Lighting | Light Commerce",
        description:
            "Discover our premium collection of energy-efficient lighting solutions. From LED bulbs to smart lighting, we have everything to brighten your world.",
        images: "/favicon.ico",
    },
};

const lights = [
    {
        id: 2,
        name: "Organize Pen Holder",
        price: "$15",
        rating: 5,
        reviewCount: 18,
        imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-05-image-card-02.jpg",
        imageAlt: "TODO",
        href: "#",
    },
    {
        id: 3,
        name: "Organize Sticky Note Holder",
        price: "$15",
        rating: 5,
        reviewCount: 14,
        imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-05-image-card-03.jpg",
        imageAlt: "TODO",
        href: "#",
    },
    {
        id: 4,
        name: "Organize Phone Holder",
        price: "$15",
        rating: 4,
        reviewCount: 21,
        imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-05-image-card-04.jpg",
        imageAlt: "TODO",
        href: "#",
    },
    {
        id: 5,
        name: "Organize Small Tray",
        price: "$15",
        rating: 4,
        reviewCount: 22,
        imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-05-image-card-05.jpg",
        imageAlt: "TODO",
        href: "#",
    },
    {
        id: 6,
        name: "Organize Basic Set (Maple)",
        price: "$149",
        rating: 5,
        reviewCount: 64,
        imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-05-image-card-06.jpg",
        imageAlt: "TODO",
        href: "#",
    },
    {
        id: 7,
        name: "Out and About Bottle",
        price: "$25",
        rating: 4,
        reviewCount: 12,
        imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-05-image-card-07.jpg",
        imageAlt: "TODO",
        href: "#",
    },
    {
        id: 8,
        name: "Daily Notebook Refill Pack",
        price: "$14",
        rating: 4,
        reviewCount: 41,
        imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-05-image-card-08.jpg",
        imageAlt: "TODO",
        href: "#",
    },
    {
        id: 9,
        name: "Leather Key Ring (Black)",
        price: "$32",
        rating: 5,
        reviewCount: 24,
        imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-05-image-card-09.jpg",
        imageAlt: "TODO",
        href: "#",
    },
];

function TaskLighting() {
    return (
        <>
            <div className="bg-white py-16">
                <div className="container mx-auto px-4 overflow-hidden sm:px-6 lg:px-8">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-gray-900">
                        Task Lighting
                    </h1>
                    <p className="mt-4 text-base text-gray-500">
                        Discover our premium collection of task lighting
                        solutions. From LED bulbs to smart lighting, we have
                        everything to light your way.
                    </p>
                </div>

                <LightCollections products={lights} />
            </div>
        </>
    );
}

export default TaskLighting;
