import CategorySection from "@/components/landing/category-section";
import CollectionSection from "@/components/landing/collection-section";
import FeaturedSection from "@/components/landing/featured-section";
import HeroSection from "@/components/landing/hero-section";
import MoreFocus from "@/components/landing/more-focus";
import AppFooter from "@/components/layouts/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Light Commerce - Premium Lighting Solutions",
    description:
        "Discover our premium collection of energy-efficient lighting solutions. From LED bulbs to smart lighting, we have everything to brighten your world.",
    keywords: ["Light Commerce", "Home", "Lights"],
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "Light Commerce - Premium Lighting Solutions",
        description:
            "Discover our premium collection of energy-efficient lighting solutions. From LED bulbs to smart lighting, we have everything to brighten your world.",
        images: "/favicon.ico",
    },
};

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection />
            <CategorySection />
            <FeaturedSection />
            <CollectionSection />
            <MoreFocus />
            <AppFooter />

            {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Illuminate Your Space
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our premium collection of energy-efficient
                        lighting solutions. From LED bulbs to smart lighting, we
                        have everything to brighten your world.
                    </p>
                </div>

    
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Featured Products
                        </h2>
                        <div className="flex items-center space-x-4">
                            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                                <option>All Categories</option>
                                <option>LED</option>
                                <option>Smart LED</option>
                                <option>CFL</option>
                                <option>Halogen</option>
                            </select>
                            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                                <option>Sort by</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Name: A to Z</option>
                                <option>Name: Z to A</option>
                            </select>
                        </div>
                    </div>

                    <ProductsGrid />
                </section>

            
            </main> */}
        </div>
    );
}
