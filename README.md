# Shoe Store E-Commerce Project

## Overview
This project is an e-commerce application for selling shoes, featuring a user-friendly interface for customers and a comprehensive dashboard for administrators. The application is built using Next.js and includes various functionalities such as product listings, user authentication, shopping cart management, and order processing.

## Project Structure
The project is organized into several directories and files, each serving a specific purpose:

```
shoe-store
├── src
│   ├── app
│   │   ├── layout.js                # Root layout for the application
│   │   ├── globals.css              # Global CSS styles
│   │   ├── page.js                  # Home page
│   │   ├── products
│   │   │   ├── page.js              # Product listing page
│   │   │   └── [slug]
│   │   │       └── page.js          # Product detail page
│   │   ├── cart
│   │   │   └── page.js              # Shopping cart page
│   │   ├── checkout
│   │   │   └── page.js              # Checkout process page
│   │   ├── account
│   │   │   ├── page.js              # User account page
│   │   │   └── orders
│   │   │       └── page.js          # User's order history
│   │   ├── auth
│   │   │   ├── login
│   │   │   │   └── page.js          # User login page
│   │   │   └── signup
│   │   │       └── page.js          # User signup page
│   │   └── dashboard
│   │       ├── layout.js            # Admin dashboard layout
│   │       ├── page.js              # Admin overview page
│   │       ├── products
│   │       │   ├── page.js          # Manage products page
│   │       │   └── [id]
│   │       │       └── page.js      # Edit product page
│   │       ├── orders
│   │       │   └── page.js          # Manage orders page
│   │       ├── users
│   │       │   └── page.js          # Manage users page
│   │       ├── analytics
│   │       │   └── page.js          # View analytics page
│   │       └── settings
│   │           └── page.js          # Manage settings page
│   ├── components
│   │   ├── Navbar.js                 # Navbar component
│   │   ├── Footer.js                 # Footer component
│   │   ├── ProductCard.js            # Product card component
│   │   ├── ProductGrid.js            # Product grid component
│   │   ├── CartSummary.js            # Cart summary component
│   │   ├── CheckoutForm.js           # Checkout form component
│   │   └── dashboard
│   │       ├── DashboardSidebar.js    # Dashboard sidebar component
│   │       └── DashboardCard.js       # Dashboard card component
│   ├── lib
│   │   ├── db.js                     # Database functions
│   │   ├── api.js                    # API functions
│   │   └── auth.js                   # Authentication functions
│   ├── hooks
│   │   ├── useCart.js                # Custom hook for cart management
│   │   └── useProducts.js            # Custom hook for product management
│   ├── context
│   │   └── CartContext.js            # Context for cart state management
│   ├── styles
│   │   ├── variables.css             # CSS variables
│   │   └── components.css            # Component-specific styles
│   └── types
│       └── index.d.ts                # TypeScript types
├── prisma
│   └── schema.prisma                 # Prisma database schema
├── scripts
│   └── seed.js                       # Database seeding script
├── .env.example                      # Example environment variables
├── next.config.js                   # Next.js configuration
├── package.json                      # Project dependencies and scripts
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.js                 # PostCSS configuration
└── README.md                         # Project documentation
```

## Features
- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Product Management**: Admins can add, edit, and delete products.
- **Shopping Cart**: Users can add products to their cart and proceed to checkout.
- **Order Management**: Users can view their order history, and admins can manage orders.
- **Analytics Dashboard**: Admins can view analytics related to sales and user activity.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Getting Started
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up your environment variables by copying `.env.example` to `.env` and filling in the required values.
4. Run the development server with `npm run dev`.
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## License
This project is licensed under the MIT License.