# Job Linker - Full Stack Job Portal

A modern job portal platform connecting students with recruiters. Built with React, Node.js, Express.js, and MongoDB.

## 🚀 Project Overview

Job Linker is a comprehensive full-stack job portal application that enables students to browse and apply for jobs while allowing recruiters to post job openings and manage applications. The platform features secure authentication, real-time application tracking, and an intuitive user interface.

## ✨ Features

### For Students
- 🔍 Browse and search jobs by title, description, or location
- 📄 View detailed job descriptions with company information
- 📝 Apply to jobs with one-click application
- 📊 Track application status (pending, accepted, rejected)
- 👤 Manage profile with bio, skills, resume, and profile photo

### For Recruiters
- 🏢 Create and manage company profiles
- 📋 Post job openings with detailed descriptions
- 👥 View and manage job applicants
- ✅ Accept or reject applications
- 📈 Dashboard with job statistics

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **Vite 5** - Build tool
- **React Router DOM 6** - Routing
- **Tailwind CSS 3** - Styling
- **Redux Toolkit** - State management
- **Axios** - HTTP client
- **Framer Motion** - Animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image storage
- **Multer** - File uploads

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas account)
- **Git**

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/RajviDhameliya/JobLinker.git
cd Job_Linker
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
FRONTEND_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
```

The server will run on `http://localhost:3000`

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
Job_Linker/
├── backend/
│   ├── controllers/      # Business logic
│   │   ├── user.controller.js
│   │   ├── job.controller.js
│   │   ├── company.controller.js
│   │   └── application.controller.js
│   ├── models/           # Mongoose schemas
│   │   ├── user.model.js
│   │   ├── job.model.js
│   │   ├── company.model.js
│   │   └── application.model.js
│   ├── routes/           # Express routes
│   │   ├── user.route.js
│   │   ├── job.route.js
│   │   ├── company.route.js
│   │   └── application.route.js
│   ├── middlewares/      # Custom middleware
│   │   ├── isAuthenticated.js
│   │   └── mutler.js
│   ├── utils/            # Utility functions
│   │   ├── db.js
│   │   ├── datauri.js
│   │   └── cloudinary.js
│   ├── index.js          # Server entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── admin/     # Admin components
│   │   │   ├── auth/      # Auth components
│   │   │   ├── shared/    # Shared components
│   │   │   └── ui/        # UI components
│   │   ├── hooks/         # Custom hooks
│   │   ├── redux/         # Redux store
│   │   ├── utils/         # Utilities
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🔌 API Endpoints

### User Endpoints
- `POST /api/v1/user/register` - Register new user
- `POST /api/v1/user/login` - User login
- `GET /api/v1/user/logout` - User logout
- `POST /api/v1/user/profile/update` - Update user profile

### Job Endpoints
- `POST /api/v1/job/post` - Create new job (Recruiter only)
- `GET /api/v1/job/get` - Get all jobs
- `GET /api/v1/job/get/:id` - Get job by ID
- `GET /api/v1/job/getadminjobs` - Get recruiter's jobs

### Company Endpoints
- `POST /api/v1/company/register` - Create company
- `GET /api/v1/company/get` - Get all companies
- `GET /api/v1/company/get/:id` - Get company by ID
- `PUT /api/v1/company/update/:id` - Update company

### Application Endpoints
- `GET /api/v1/application/apply/:id` - Apply for a job
- `GET /api/v1/application/get` - Get user's applied jobs
- `GET /api/v1/application/:id/applicants` - Get applicants for a job
- `POST /api/v1/application/status/:id/update` - Update application status

## 🧪 Testing

### Postman Collection
Import the Postman collection to test all API endpoints. Ensure you:
1. Set up environment variables in Postman
2. Login first to get authentication token
3. Use the token in subsequent requests

### Test Scenarios
- User registration and login
- Job creation and retrieval
- Company management
- Application submission and status updates

## 🚀 Deployment

### Frontend (Vercel)

### Backend (Render)


---

**Built with ❤️ by Rajvi Dhameliya**