# 🛒 GroceryGo

A full-stack MERN grocery delivery platform featuring product browsing, user authentication, shopping cart management, order management, seller functionality, image uploads, and online payment integration.

## 🚀 Features

### Customer Features

- User registration and login
- Secure user authentication
- Browse grocery products
- Product search and filtering
- Product details
- Add products to cart
- Update cart quantities
- Address management
- Checkout
- Cash on Delivery
- Online payment using Stripe
- Order placement
- Order history
- Order status tracking

### Seller Features

- Seller authentication
- Add new products
- Upload product images
- Manage products
- View customer orders
- Update order status
- Product and inventory management

### Cloud Services

- MongoDB Atlas for database management
- Cloudinary for product image storage
- Stripe for online payments
- Vercel for deployment

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### Services

- MongoDB Atlas
- Cloudinary
- Stripe
- Vercel

---

## 📁 Project Structure

```text
GroceryGo/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md