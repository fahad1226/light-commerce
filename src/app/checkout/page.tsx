import { Metadata } from "next";
import CheckoutProcess from "./checkout-process";
import AppFooter from "@/components/layouts/footer";

export const metadata: Metadata = {
    title: "Checkout | Light Commerce",
    description: "Checkout your order and complete your purchase.",
    keywords: ["Light Commerce", "Checkout", "Purchase"],
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "Checkout | Light Commerce",
        description: "Checkout your order and complete your purchase.",
        images: "/favicon.ico",
    },
};

export default async function CheckoutPage() {
    return (
        <div>
            <CheckoutProcess />
            <AppFooter />
        </div>
    );
}
