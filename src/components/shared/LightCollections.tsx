import { LightProduct } from "@/types/global";
import clsx from "clsx";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LightCollections({
    products,
}: {
    products: LightProduct[];
}) {
    return (
        <div className="bg-white">
            <div className="mx-auto container px-4 overflow-hidden sm:px-6 lg:px-8 py-12 xl:py-24">
                <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            className="group relative border-r border-b border-gray-200 p-4 sm:p-6"
                            href={product.href}
                        >
                            <Image
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                width={300}
                                height={300}
                                className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
                            />
                            <div className="pt-10 pb-4 text-center">
                                <h3 className="text-sm font-medium text-gray-900">
                                    <a href={product.href}>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        />
                                        {product.name}
                                    </a>
                                </h3>
                                <div className="mt-3 flex flex-col items-center">
                                    <p className="sr-only">
                                        {product.rating} out of 5 stars
                                    </p>
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                aria-hidden="true"
                                                className={clsx(
                                                    product.rating > rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-200",
                                                    "size-5 shrink-0"
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <p className="mt-4 text-base font-medium text-gray-900">
                                        {product.price}
                                    </p>
                                </div>
                                <button className="mt-4 w-full rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                                    Add to Cart
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
