import {
    ArrowLeft,
    CheckCircle,
    CreditCard,
    HelpCircle,
    Shield,
    Truck,
} from "lucide-react";

const products = [
    {
        id: 1,
        name: "Floral Print Wrap Dress",
        href: "#",
        price: "$21.50",
        color: "Blue",
        size: "42",
        quantity: 1,
        imageSrc:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop&crop=center",
        imageAlt: "Blue floral print wrap dress",
    },
    {
        id: 2,
        name: "Floral Print Wrap Dress",
        href: "#",
        price: "$32.50",
        color: "Red",
        size: "42",
        quantity: 1,
        imageSrc:
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop&crop=center",
        imageAlt: "Red floral print wrap dress",
    },
];

export default function CheckoutProcess() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header with Progress */}
            <div className="bg-gray-100 shadow-sm border-b">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Progress Bar */}
                    <div className="py-8">
                        <div className="flex items-center justify-center space-x-8">
                            {[
                                { name: "Cart", completed: true },
                                { name: "Delivery", completed: true },
                                {
                                    name: "Payment",
                                    completed: false,
                                    current: true,
                                },
                                { name: "Confirmation", completed: false },
                            ].map((step, index) => (
                                <div
                                    key={step.name}
                                    className="flex items-center"
                                >
                                    <div
                                        className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                                            step.completed
                                                ? "bg-green-500 text-white"
                                                : step.current
                                                ? "bg-orange-500 text-white"
                                                : "bg-gray-200 text-gray-500"
                                        }`}
                                    >
                                        {step.completed ? (
                                            <CheckCircle className="w-5 h-5" />
                                        ) : (
                                            index + 1
                                        )}
                                    </div>
                                    <span
                                        className={`ml-2 text-sm font-medium ${
                                            step.current
                                                ? "text-orange-600"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        {step.name}
                                    </span>
                                    {index < 3 && (
                                        <div
                                            className={`ml-4 w-8 h-0.5 ${
                                                step.completed
                                                    ? "bg-green-500"
                                                    : "bg-gray-200"
                                            }`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Payment Form */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h1 className="text-2xl font-bold text-gray-900 mb-8">
                                Payment Information
                            </h1>

                            <form className="space-y-6">
                                {/* Cardholder Name */}
                                <div>
                                    <label
                                        htmlFor="cardholder-name"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Cardholder Name
                                    </label>
                                    <input
                                        type="text"
                                        id="cardholder-name"
                                        name="cardholder-name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Enter full name"
                                    />
                                </div>

                                {/* Card Number */}
                                <div>
                                    <label
                                        htmlFor="card-number"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Card Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="card-number"
                                            name="card-number"
                                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                            placeholder="1234 5678 9012 3456"
                                        />
                                        <CreditCard className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>

                                {/* Expiry and CVV */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="expiry-month"
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            Exp. Date
                                        </label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <select
                                                id="expiry-month"
                                                name="expiry-month"
                                                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                            >
                                                <option>Month</option>
                                                {Array.from(
                                                    { length: 12 },
                                                    (_, i) => (
                                                        <option
                                                            key={i + 1}
                                                            value={i + 1}
                                                        >
                                                            {String(
                                                                i + 1
                                                            ).padStart(2, "0")}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                            <select
                                                id="expiry-year"
                                                name="expiry-year"
                                                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                            >
                                                <option>Year</option>
                                                {Array.from(
                                                    { length: 10 },
                                                    (_, i) => (
                                                        <option
                                                            key={i}
                                                            value={
                                                                new Date().getFullYear() +
                                                                i
                                                            }
                                                        >
                                                            {new Date().getFullYear() +
                                                                i}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="cvv"
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            CVV
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="cvv"
                                                name="cvv"
                                                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                                placeholder="123"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                            >
                                                <HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* CVV Help Tooltip */}
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <p className="text-sm text-gray-600 mb-3">
                                        The card security code is a unique three
                                        or four digit number printed on the
                                        front (American Express) or back (Visa /
                                        MasterCard) of your card.
                                    </p>
                                    <div className="flex space-x-4">
                                        <div className="flex-1">
                                            <div className="bg-blue-600 rounded-lg p-3 text-white text-xs">
                                                <div className="font-semibold mb-1">
                                                    VISA / DISCOVER
                                                </div>
                                                <div className="text-blue-100">
                                                    3 Digit CVV Number
                                                </div>
                                                <div className="mt-2 text-right">
                                                    123
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="bg-red-600 rounded-lg p-3 text-white text-xs">
                                                <div className="font-semibold mb-1">
                                                    AMERICAN EXPRESS
                                                </div>
                                                <div className="text-red-100">
                                                    4 Digit CVV Number
                                                </div>
                                                <div className="mt-2 text-right">
                                                    3827
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-4 pt-6">
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                                    >
                                        Pay $49.50
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-900 transition-all duration-200 flex items-center justify-center"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Back to Address
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">
                                Summary
                            </h2>
                            <p className="text-sm text-gray-500 mb-6">
                                2 items in your bag
                            </p>

                            {/* Products */}
                            <div className="space-y-4 mb-6">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl"
                                    >
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="w-16 h-16 rounded-lg object-cover"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900">
                                                {product.name}
                                            </h3>
                                            <div className="text-sm text-gray-500 space-y-1">
                                                <p>Color • {product.color}</p>
                                                <p>Size • {product.size}</p>
                                                <p>Qty • {product.quantity}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-gray-900">
                                                {product.price}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Order Breakdown */}
                            <div className="space-y-3 border-t border-gray-200 pt-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">
                                        Cart Subtotal
                                    </span>
                                    <span className="font-semibold">
                                        $54.00
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">
                                        Shipping & Handling
                                    </span>
                                    <span className="font-semibold text-green-600">
                                        $0.00
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">
                                        Discount
                                    </span>
                                    <span className="font-semibold text-red-600">
                                        -$4.50
                                    </span>
                                </div>
                                <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
                                    <span>Cart Total</span>
                                    <span>$49.50</span>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                                <div className="flex items-start space-x-3">
                                    <Truck className="w-5 h-5 text-gray-400 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            Shipment Address
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Akshya Nagar 1st Block 1st Cross,
                                            <br />
                                            Rammurthy nagar, Bangalore
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Security Badge */}
                            <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
                                <Shield className="w-4 h-4 text-green-500" />
                                <span>
                                    Your payment information is secure and
                                    encrypted
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
