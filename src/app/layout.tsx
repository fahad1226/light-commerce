import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Light Commerce - Premium Lighting Solutions",
    description:
        "Discover our premium collection of energy-efficient lighting solutions. From LED bulbs to smart lighting, we have everything to brighten your world.",
    keywords:
        "LED bulbs, smart lighting, energy efficient, light bulbs, lighting solutions",
    authors: [{ name: "Light Commerce Team" }],
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
