import AppFooter from "@/components/layouts/footer";
import AppHeader from "@/components/layouts/header";
import { StoreProvider } from "@/lib/store/provider";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
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

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={ubuntu.className}>
            <body className="antialiased">
                <StoreProvider>
                    <AppHeader />
                    {children}
                    <AppFooter />
                </StoreProvider>
            </body>
        </html>
    );
}
