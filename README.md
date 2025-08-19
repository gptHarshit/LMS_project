Features

User Authentication: Secure registration, login, and logout with JWT and bcrypt.js for password hashing.
Course Management: Create, edit, delete, and enroll in courses with role-based access (admin/instructor only for creation and modification).
User Profiles: Manage personal details and track course progress.
Role-Based Access: Supports admin, instructor, and student roles.
Responsive Design: Optimized for mobile and desktop using Tailwind CSS.
Course Progress Tracking: Monitor progress within enrolled courses.
Secure APIs: JWT-based authentication for protected endpoints.

Tech Stack
Frontend

React: Dynamic user interfaces.
Tailwind CSS: Responsive and modern styling.
React Router: Client-side routing.
Axios: API requests.
Vite: Fast frontend build tool.

Backend

Node.js: Server-side JavaScript runtime.
Express.js: RESTful API framework.
MongoDB: NoSQL database.
Mongoose: MongoDB object modeling.
JWT: Secure authentication.
Bcrypt.js: Password hashing.

Other Tools

MongoDB Atlas: Cloud database.
Postman: API testing.

Folder Structure
lms-project/
├── client/                    # Frontend (React) source code
│   ├── public/                # Static assets (e.g., favicon, images)
│   ├── src/                   # React source code
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # Page components (Home, Course, Profile)
│   │   ├── assets/            # Images, styles, and other assets
│   │   ├── App.jsx            # Main React app component
│   │   └── main.jsx           # Entry point for React
├── server/                    # Backend (Node.js/Express) source code
│   ├── config/                # Configuration files (e.g., database)
│   ├── models/                # Mongoose models (User, Course)
│   ├── routes/                # API routes (auth, courses)
│   ├── middleware/            # Custom middleware (e.g., authentication)
│   ├── controllers/           # Route handlers
│   └── server.js              # Main server file
├── screenshots/               # Screenshots for documentation
├── .env                       # Environment variables (not tracked)
├── .gitignore                 # Files ignored by Git
├── package.json               # Project metadata and dependencies

API Endpoints
Base URL: http://localhost:5000/api
Authentication

POST /auth/register: Register a new user.
POST /auth/login: Log in a user and return JWT.
GET /auth/me: Get authenticated user details (requires JWT).

Courses

GET /courses: Fetch all courses.
POST /courses: Create a new course (admin/instructor only).
PUT /courses/:id: Update a course (admin/instructor only).
DELETE /courses/:id: Delete a course (admin/instructor only).

User Profile

GET /users/profile: Retrieve user profile.
PUT /users/profile: Update user profile.

Note: Protected endpoints require a JWT in the Authorization header as Bearer <token>.
