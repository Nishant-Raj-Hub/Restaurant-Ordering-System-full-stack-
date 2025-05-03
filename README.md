# Restaurant Ordering System

A full-stack restaurant ordering system built with React, TypeScript, Node and MongoDB.

## Backend Setup

1. Clone the repository
2. Navigate to the server directory:
   ```bash
   cd server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a .env file with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

## Database Choice: MongoDB vs PostgreSQL

MongoDB was chosen for this project because:
- Flexible schema design for menu items and orders
- Better handling of nested JSON data structures
- Easier scalability for future menu modifications
- Simpler integration with Node.js/Express backend

## API Endpoints

- `GET /api/menu/` - Fetch all menu items
- `POST /api/menu/seed` - Populate database with initial menu items
- `POST /api/orders/` - Create a new order
- `GET /api/orders/orderhistory` - Fetch order history

## Live Demo

[View Live Demo](https://restaurant-ordering-system.netlify.app/)

## Challenges & Solutions

1. TypeScript Integration:
   - Faced issues with type definitions for cart items and orders
   - Resolved by properly defining interfaces and making certain properties optional

2. Deployment Challenges:
   - Initially encountered CORS issues
   - Fixed deployment issues by following documentation and online resources


## Technologies Used

- Frontend: React, TypeScript, TailwindCSS
- Backend: Node.js, Express, TypeScript
- Database: MongoDB
- Deployment: Netlify (Frontend), Render (Backend)
