# Light Commerce

A modern e-commerce application for lighting products built with Next.js, TypeScript, Tailwind CSS, Drizzle ORM, and Neon PostgreSQL.

## Features

-   🛍️ **E-commerce Platform**: Complete product catalog with cart functionality
-   💡 **Lighting Products**: Specialized in LED bulbs, smart lighting, and energy-efficient solutions
-   🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
-   🔐 **Authentication Ready**: Better Auth integration for user management
-   🗄️ **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
-   📱 **Responsive**: Mobile-first design that works on all devices
-   ⚡ **Fast**: Built with Next.js 15 and App Router for optimal performance

## Tech Stack

-   **Framework**: Next.js 15 with App Router
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Database**: Neon PostgreSQL
-   **ORM**: Drizzle ORM
-   **Authentication**: Better Auth
-   **State Management**: Zustand
-   **Icons**: Lucide React
-   **Linting**: ESLint

## Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn
-   Neon PostgreSQL database

### Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd light-commerce
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    ```bash
    cp env.example .env.local
    ```

    Edit `.env.local` and add your database URL and other configuration:

    ```env
    DATABASE_URL="postgresql://username:password@host:port/database"
    AUTH_SECRET="your-auth-secret-key-here"
    AUTH_URL="http://localhost:3000"
    ```

4. **Set up the database**

    ```bash
    # Generate migration files
    npm run db:generate

    # Push schema to database
    npm run db:push

    # Seed the database with sample products
    npm run db:seed
    ```

5. **Run the development server**

    ```bash
    npm run dev
    ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Schema

### Products Table

-   `id`: UUID (Primary Key)
-   `name`: Product name
-   `description`: Product description
-   `price`: Decimal price
-   `image`: Product image URL
-   `category`: Product category (LED, Smart LED, CFL, etc.)
-   `wattage`: Power consumption in watts
-   `colorTemperature`: Light color temperature
-   `lumens`: Light output
-   `isAvailable`: Availability status
-   `stockQuantity`: Available stock
-   `createdAt`: Creation timestamp
-   `updatedAt`: Last update timestamp

### Users Table

-   `id`: UUID (Primary Key)
-   `email`: User email
-   `name`: User name
-   `image`: Profile image URL
-   `createdAt`: Creation timestamp
-   `updatedAt`: Last update timestamp

## Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint
-   `npm run db:generate` - Generate database migrations
-   `npm run db:migrate` - Run database migrations
-   `npm run db:push` - Push schema changes to database
-   `npm run db:seed` - Seed database with sample data
-   `npm run db:studio` - Open Drizzle Studio

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── ProductCard.tsx # Individual product card
│   └── ProductsGrid.tsx # Products grid layout
├── lib/               # Utility libraries
│   ├── db/            # Database configuration
│   │   ├── index.ts   # Database connection
│   │   ├── schema.ts  # Database schema
│   │   └── seed.ts    # Database seeding
│   ├── services/      # Business logic services
│   │   └── products.ts # Product-related services
│   └── store.ts       # Zustand state management
└── styles/            # Global styles
```

## Features

### Product Catalog

-   Display all available lighting products
-   Product filtering by category
-   Product search functionality
-   Responsive grid layout

### Shopping Cart

-   Add/remove products from cart
-   Update product quantities
-   Cart total calculation
-   Cart item count display

### User Interface

-   Modern, clean design
-   Responsive layout for all devices
-   Loading states and error handling
-   Smooth animations and transitions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help, please open an issue on GitHub.
