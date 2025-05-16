# 🗄️ WorkFission Backend

This is the backend for the Mini E-Commerce Platform. It is built with **Node.js**, **Express**, and **PostgreSQL** (using `pg-promise`). The backend provides RESTful APIs for product submission, retrieval, and detail viewing.

---

## 📁 Directory Structure

```
workfission-backend/
│
├── .env
├── .gitignore
├── package.json
├── README.md
├── vercel.json
└── src/
    ├── server.js
    ├── controllers/
    │   └── product.controller.js
    ├── db/
    │   └── index.js
    ├── routes/
    │   └── product.route.js
    └── utils/
```

---

## 🌐 Environment Variables

Create a `.env` file in the root directory.

### 🛬 For Production (Cloud DB with SSL)

```
ORIGIN=http://localhost:5173
POSTGRESQL_USERNAME=your_db_user
POSTGRESQL_HOST=your_db_host
POSTGRESQL_PORT=your_db_port
POSTGRESQL_DBNAME=your_db_name
POSTGRESQL_PASSWORD=your_db_password
POSTGRESQL_SSL_CA=your_ssl_ca_string
```

### 🛫 For Local Development

Use these values for local PostgreSQL testing:

```
POSTGRESQL_USERNAME=postgres
POSTGRESQL_HOST=localhost
POSTGRESQL_PORT=5432
POSTGRESQL_DBNAME=test
POSTGRESQL_PASSWORD=Postgresql
```

---

## 🧭 Switching Between Production and Local Development

- **Production:**  
  By default, `src/db/index.js` uses the production (SSL) options.

- **Local Testing:**  
  To use your local PostgreSQL:
  1. **Comment out** the production `options` block in `src/db/index.js`.
  2. **Uncomment** the `"For Local Development"` options block.
  3. Use the local `.env` variables above.

  Example in `src/db/index.js`:
  ```js
  // For Production
  // const options = { ...ssl config... }

  // For Local Development
  const options = {
      host: process.env.POSTGRESQL_HOST,
      port: process.env.POSTGRESQL_PORT,
      database: process.env.POSTGRESQL_DBNAME,
      user: process.env.POSTGRESQL_USERNAME,
      password: process.env.POSTGRESQL_PASSWORD,
  }
  ```

---

## ⚙️ Setup Instructions

### 1. ✍️ Install Dependencies

```sh
cd workfission-backend
npm install
```

### 2. Configure Environment

- Copy `.env` and fill in your PostgreSQL and CORS (frontend) details.

### 3. 🚀 Start the Server

```sh
npm start
```
- The server will run on [http://localhost:3000](http://localhost:3000) by default.

---

## 🔑 API Endpoints

### Base URL

```
http://localhost:3000
```

### Product Routes

- **POST `/api/products/add`**  
  Add a new product.  
  **Body:**  
  ```json
  {
    "name": "Chair",
    "price": 100,
    "description": "A comfortable chair",
    "image_urls": ["https://example.com/chair.jpg"]
  }
  ```

- **GET `/api/products/all`**  
  Get all products.

- **GET `/api/products/:id`**  
  Get a single product by its ID.

---

## 📜 File Overview

- **[src/server.js](src/server.js)**  
  Main Express server setup, CORS, and route mounting.

- **[src/controllers/product.controller.js](src/controllers/product.controller.js)**  
  Controller functions for adding and retrieving products.

- **[src/db/index.js](src/db/index.js)**  
  PostgreSQL connection and table initialization using `pg-promise`.

- **[src/routes/product.route.js](src/routes/product.route.js)**  
  Express router for product-related endpoints.

- **[vercel.json](vercel.json)**  
  Vercel deployment configuration.

---

## 🧮 Database

- The backend will automatically create a `products` table if it does not exist.
- Table columns: `id`, `name`, `price`, `description`, `image_urls` (array), `created_at`.

---

## 📌 What's Working

- Product submission (with multiple image URLs)
- Product listing (all products)
- Product detail by ID
- PostgreSQL integration with SSL support
- CORS configured for frontend
- Ready for deployment on Vercel

---

## 📍 License

ISC

---

## 📍 Author

Abhishek Kumar
