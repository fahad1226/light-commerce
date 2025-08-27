# Quick Setup Guide

## 1. Environment Setup

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@host:port/database"
AUTH_SECRET="your-secret-key-here"
AUTH_URL="http://localhost:3000"
```

## 2. Database Setup

### Option A: Using Neon PostgreSQL (Recommended)

1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new project
3. Copy the connection string from your dashboard
4. Replace the DATABASE_URL in your `.env.local` file

### Option B: Using Local PostgreSQL

1. Install PostgreSQL locally
2. Create a new database
3. Update the DATABASE_URL in your `.env.local` file

## 3. Initialize Database

```bash
# Push the schema to your database
npm run db:push

# Seed with sample light bulb products
npm run db:seed
```

## 4. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application!

## 5. Verify Setup

- ✅ Products should be displayed on the homepage
- ✅ Cart functionality should work
- ✅ Database queries should work via the API at `/api/products`

## Troubleshooting

### Database Connection Issues
- Verify your DATABASE_URL is correct
- Ensure your database is accessible
- Check if your IP is whitelisted (for cloud databases)

### Build Issues
- Run `npm install` to ensure all dependencies are installed
- Clear Next.js cache: `rm -rf .next`

### Image Loading Issues
- The app uses Unsplash placeholder images
- For production, replace with your own product images 