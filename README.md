# 📝 Task Manager Pro

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/SakshiAwasthi19/taskmanager)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/Frontend-React-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen.svg)](https://www.mongodb.com/)
[![Redux](https://img.shields.io/badge/State-Redux-purple.svg)](https://redux.js.org/)

**Task Manager Pro** is a sophisticated, full-stack productivity application designed to streamline your daily workflow. Built with a modern tech stack including **React 19**, **Redux Toolkit**, and **Node.js**, it offers a seamless experience for managing tasks with a premium dark-mode interface, interactive Kanban boards, and deep productivity analytics.

---

## 📸 visual Preview

<div align="center">
  <h3>🔑 Secure Authentication</h3>
  <img src="./assets/login-page.png" alt="Login Page" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"/>
  
  <h3>🏠 Dynamic Dashboard</h3>
  <img src="./assets/dashboard-main.png" alt="Dashboard" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"/>
  
  <h3>📊 Productivity Analytics</h3>
  <img src="./assets/report-analytics.png" alt="Analytics Report" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"/>
</div>

---

## ✨ Core Features

### 🚀 Smart Task Management
- **Interactive Kanban**: Drag and drop tasks between *Pending*, *In Progress*, and *Completed* states using a fluid board interface.
- **Detailed Tracking**: Assign priorities (Low, Medium, High), set due dates, and add descriptive notes to every task.
- **Quick Actions**: Mark as complete, edit, or delete tasks directly from the dashboard with intuitive controls.
- **Advanced Filtering**: Instantly search and filter tasks by title, status, or priority level.

### 📊 Deep Analytics & Insights
- **Visual Trends**: Track your progress with interactive Bar and Line charts showing weekly completion trends.
- **Streak Counter**: Stay motivated with a daily streak counter that tracks your consistency.
- **Key Metrics**: Get a high-level overview of total, completed, and pending tasks at a glance.

### 🎨 Premium User Experience
- **Fluid Animations**: Powered by **Framer Motion** for smooth transitions and interactive UI elements.
- **Modern UI**: A clean, responsive design built with **Bootstrap 5** and custom CSS variables.
- **Dark Mode Support**: Seamlessly toggle between light and dark themes with persistent user preferences.
- **Real-time Feedback**: Instant notifications via **React Toastify** for all user actions.

### 🔐 Secure & Personalized
- **JWT Authentication**: Secure login and registration system ensuring your data remains private.
- **Profile Management**: Update your personal details and account settings through a dedicated profile portal.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 19 (Hooks, Context API)
- **State Management**: Redux Toolkit
- **Styling**: Bootstrap 5, Custom CSS (Glassmorphism)
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Drag & Drop**: @hello-pangea/dnd & jQuery UI
- **Icons**: React Icons (Fa, Fi, Md)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Authentication**: JSON Web Tokens (JWT), BcryptJS
- **Middleware**: CORS, Body-parser

### Database
- **Engine**: MongoDB
- **ORM**: Mongoose

---

## 📦 Getting Started

### Prerequisites
- **Node.js** (v16.x or higher)
- **npm** (v8.x or higher)
- **MongoDB** (Running locally or an Atlas URI)

### 1. Clone the Repository
```bash
git clone https://github.com/SakshiAwasthi19/taskmanager.git
cd taskmanager
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_key_here
```

### 3. Install Dependencies
**Root & Backend:**
```bash
npm install
```
**Frontend:**
```bash
cd client1
npm install
cd ..
```

### 4. Launch the Application
Run both backend and frontend concurrently:
```bash
npm run dev:full
```
The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Architecture

```text
taskmanager/
├── client1/               # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI Components
│   │   ├── pages/         # Page-level Components (Dashboard, Report, etc.)
│   │   ├── store/         # Redux Toolkit Slices & Store
│   │   ├── context/       # Theme & Auth Contexts
│   │   └── App.js         # Root Component & Routing
├── routes/                # API Endpoints (Auth, Tasks)
├── models/                # Mongoose Schema Definitions
├── middleware/            # Auth & Validation Middleware
├── server.js              # Express Server Entry Point
└── assets/                # Screenshots & Static Media
```

---

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/SakshiAwasthi19">Sakshi Awasthi</a></p>
</div>
