# Learning Management System (LMS)

A full-stack Learning Management System built with MERN stack that enables instructors to create courses and students to enroll and learn online.

## 🚀 Features

### 👨‍🎓 Student Features
- Browse and search published courses
- Purchase courses using Stripe payment gateway
- Track learning progress with visual indicators
- Watch video lectures with progress tracking
- Mark courses as completed
- Personal dashboard for enrolled courses

### 👨‍🏫 Instructor Features
- Create and manage courses with rich text editor
- Upload course thumbnails and video lectures
- Set course pricing and details
- Publish/unpublish courses
- View student enrollments
- Instructor dashboard for course management

### 🔐 Authentication & Security
- JWT-based authentication
- Role-based access (Student/Instructor)
- Protected routes and middleware
- Password hashing with bcrypt
- Secure file uploads

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **ReactQuill** - Rich text editor

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Stripe** - Payment processing
- **Cloudinary** - Media storage

## 📦 Installation

### Prerequisites
- Node.js installed
- MongoDB installed and running
- Stripe account for payments
- Cloudinary account for media storage

### Backend Setup
```
cd backend
npm install
```

Create a .env file in backend directory:
```
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
WEBHOOK_ENDPOINT_SECRET=your_stripe_webhook_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```


Start the backend server:
```
npm run dev
```

Frontend Setup
```
cd frontend
npm install
```


Create a `.env` file in frontend directory:
```
VITE_API_BASE_URL=http://localhost:8080/api/v1
```

Start the frontend development server:
```
npm run dev
```


## 🏃‍♂️ Usage
- Register/Login - Create an account or login
- Student Flow - Browse courses, purchase, and start learning
- Instructor Flow - Create courses, add lectures, and publish


## 🔧 API Endpoints

###  Authentication
- POST /api/v1/user/register - User registration
- POST /api/v1/user/login - User login
- GET /api/v1/user/logout - User logout
- GET /api/v1/user/profile - Get user profile
- PUT /api/v1/user/profile/update - Update profile

###  Courses
- POST /api/v1/course - Create course
- GET /api/v1/course - Get creator courses
- PUT /api/v1/course/:courseId - Edit course
- GET /api/v1/course/published-courses - Get published courses
- GET /api/v1/course/search - Search courses

###  Lectures
- POST /api/v1/course/:courseId/lecture - Create lecture
- GET /api/v1/course/:courseId/lecture - Get course lectures
- POST /api/v1/course/:courseId/lecture/:lectureId - Edit lecture
- DELETE /api/v1/course/lecture/:lectureId - Remove lecture

###  Payments
- POST /api/v1/purchase/checkout/create-checkout-session - Create checkout
- POST /api/v1/purchase/webhook - Stripe webhook

There are some more API's 

