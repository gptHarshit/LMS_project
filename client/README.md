<!-- 5YwgwBvlVRRg1dzh -->
<!-- guptaharshit0699 -->



---



# LMS Project (Learning Management System)

This is a full-stack LMS (Learning Management System) built using **Vite + React + Tailwind CSS** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## 📁 Project Structure

LMS_project/
│
├── client/ # Frontend Code (React + Tailwind)
│ └── src/
│ ├── assets/ # Static images, logos, etc.
│ ├── components/ # Reusable UI components (Button, Input, Card etc.)
│ ├── lib/ # Utility files or external libraries
│ ├── pages/ # Pages like Login, Signup, Dashboard etc.
│ ├── App.jsx # Root component
│ ├── main.jsx # Entry point for React
│ ├── index.css # Global CSS (includes Tailwind base styles)
│
├── server/ # Backend Code (Node + Express + MongoDB)
│ ├── controllers/ # Logic handling (e.g. register, login)
│ │ └── user.controller.js
│ ├── database/ # MongoDB connection
│ │ └── db.js
│ ├── models/ # Mongoose schemas
│ │ └── user.model.js
│ ├── utils/ # Helper functions (like token generation)
│ │ └── generatetoken.js
│ ├── index.js # Entry point of server
│ └── .env # Environment variables

## 🛠 Tech Stack Used

### Frontend
- **React** with Vite for fast development
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** component library (Card, Tabs, Inputs, etc.)
- **Lucide-react** for clean SVG icons

### Backend
- **Node.js & Express** for server-side logic
- **MongoDB** with **Mongoose** for database
- **bcryptjs** for password hashing
- **jsonwebtoken** (via `generateToken.js`) for secure authentication
- **dotenv** for environment config
- **nodemon** for live server reload during development

---

## 🔐 Authentication Features (Register + Login)

### 📄 Backend Logic

File: `server/controllers/user.controller.js`

- `register(req, res)`:  
  - Takes `name`, `email`, `password`.
  - Validates input.
  - Checks if email already registered.
  - Hashes password with `bcrypt`.
  - Saves new user in DB.
  
- `login(req, res)`:  
  - Takes `email`, `password`.
  - Validates credentials.
  - Compares password with hashed one.
  - Calls `generateToken()` if successful.

---

## 🔑 Token Generation

File: `utils/generatetoken.js`

- Uses **JWT (jsonwebtoken)** to sign a token with the user’s ID.
- Token is stored in HTTP-Only cookie for secure session handling.

---

## 📦 MongoDB Model

File: `models/user.model.js`

```js

