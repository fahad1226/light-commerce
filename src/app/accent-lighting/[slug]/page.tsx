import SingleProduct from "@/components/shared/SingleProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Single Accent Lighting | Light Commerce",
    description:
        "Discover our premium collection of energy-efficient lighting solutions. From LED bulbs to smart lighting, we have everything to brighten your world.",
    keywords: ["Light Commerce", "Browse Lights", "Lights"],
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "Single Accent Lighting | Light Commerce",
        description:
            "Discover our premium collection of energy-efficient lighting solutions. From LED bulbs to smart lighting, we have everything to brighten your world.",
        images: "/favicon.ico",
    },
};

export default async function SingleAccentLighting({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;

    return (
        <>
            <div className="bg-white">
                <SingleProduct />
            </div>
        </>
    );
}
