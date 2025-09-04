"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store";
import { toggleShoppingCart } from "@/lib/store/slices/uiSlice";
import {
    BarChart3,
    ChevronDownIcon,
    Search,
    ShieldQuestion,
    ShoppingBagIcon,
} from "lucide-react";
import Link from "next/link";
import ShoppingCartDrawer from "../shared/ShoppingCart";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

const navigation = {
    pages: [
        { name: "Accent Lighting", href: "/accent-lighting" },
        { name: "Ambient Lighting", href: "/ambient-lighting" },
        { name: "Decorative Lighting", href: "/decorative-lighting" },
        { name: "Task Lighting", href: "/task-lighting" },
    ],
};

export default function AppHeader() {
    const dispatch = useAppDispatch();

    // Select states from all three slices
    const {
        showShoppingCart,
        isLoading: uiLoading,
        error: uiError,
    } = useAppSelector((state) => state.ui);

    const handleToggleCart = () => dispatch(toggleShoppingCart());

    return (
        <>
            <ShoppingCartDrawer
                open={showShoppingCart}
                handleClose={handleToggleCart}
            />
            <header className="relative z-10">
                <nav aria-label="Top">
                    <div className="bg-zinc-300">
                        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                            <form className="hidden lg:block lg:flex-1">
                                <div className="-ml-2 inline-grid grid-cols-1">
                                    <select
                                        id="desktop-currency"
                                        name="currency"
                                        aria-label="Currency"
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pr-7 pl-2 text-left text-base font-medium text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6"
                                    >
                                        {currencies.map((currency) => (
                                            <option key={currency}>
                                                {currency}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"
                                    />
                                </div>
                            </form>

                            <p className="flex-1 text-center text-sm font-medium text-gray-600 lg:flex-none">
                                Get free delivery on orders over $100
                            </p>

                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                <a
                                    href="#"
                                    className="text-sm font-medium text-gray-600 hover:text-gray-800"
                                >
                                    Create an account
                                </a>
                                <span
                                    aria-hidden="true"
                                    className="h-6 w-px bg-gray-600"
                                />
                                <a
                                    href="#"
                                    className="text-sm font-medium text-gray-600 hover:text-gray-800"
                                >
                                    Sign in
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Secondary navigation */}
                    <div className="bg-white/10 backdrop-blur-md backdrop-filter">
                        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                {/* Logo (lg+) */}
                                <Link href="/" className="flex items-center">
                                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                                        <div className="w-4 h-4 bg-white rounded-full"></div>
                                    </div>
                                    <span className="ml-2 text-xl font-bold text-gray-200">
                                        LightUp
                                    </span>
                                </Link>

                                <div className="hidden h-full lg:flex items-center justify-center w-full">
                                    {/* Flyout menus */}
                                    <div className="inset-x-0 bottom-0 px-4">
                                        <div className="flex h-full justify-center space-x-8">
                                            {navigation.pages.map((page) => (
                                                <div
                                                    key={page.name}
                                                    className="flex"
                                                >
                                                    <div className="relative flex">
                                                        <Link
                                                            href={page.href}
                                                            className="group relative flex items-center justify-center text-sm tracking-wide font-bold uppercase text-white"
                                                        >
                                                            {page.name}
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile menu and search (lg-) */}
                                <div className="flex flex-1 items-center lg:hidden">
                                    <button
                                        type="button"
                                        className="-ml-2 p-2 text-white"
                                    >
                                        <span className="sr-only">
                                            Open menu
                                        </span>
                                        <BarChart3
                                            aria-hidden="true"
                                            className="size-6"
                                        />
                                    </button>

                                    {/* Search */}
                                    <a href="#" className="ml-2 p-2 text-white">
                                        <span className="sr-only">Search</span>
                                        <Search
                                            aria-hidden="true"
                                            className="size-6"
                                        />
                                    </a>
                                </div>

                                {/* Logo (lg-) */}
                                <Link href="/" className="lg:hidden">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <img
                                        alt=""
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white"
                                        className="h-8 w-auto"
                                    />
                                </Link>

                                <div className="flex flex-1 items-center justify-end">
                                    <a
                                        href="#"
                                        className="hidden text-sm font-medium text-white lg:block"
                                    >
                                        Search
                                    </a>

                                    <div className="flex items-center lg:ml-8">
                                        {/* Help */}
                                        <a
                                            href="#"
                                            className="p-2 text-white lg:hidden"
                                        >
                                            <span className="sr-only">
                                                Help
                                            </span>
                                            <ShieldQuestion
                                                aria-hidden="true"
                                                className="size-6"
                                            />
                                        </a>
                                        <a
                                            href="#"
                                            className="hidden text-sm font-medium text-white lg:block"
                                        >
                                            Help
                                        </a>

                                        {/* Cart */}
                                        <div className="ml-4 flow-root lg:ml-8">
                                            <button
                                                onClick={handleToggleCart}
                                                className="group -m-2 flex items-center p-2"
                                            >
                                                <ShoppingBagIcon
                                                    aria-hidden="true"
                                                    className="size-6 shrink-0 text-white"
                                                />
                                                <span className="ml-2 text-sm font-medium text-white">
                                                    0
                                                </span>
                                                <span className="sr-only">
                                                    items in cart, view bag
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
