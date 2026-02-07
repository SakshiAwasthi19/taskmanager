# Task Manager

A full-stack web application for managing your daily tasks, built with React, Redux, Node.js, Express, MongoDB, Bootstrap, and jQuery.

## 🚀 Project Overview
The Task Manager helps you organize, track, and manage your tasks efficiently. You can add, edit, delete, and view tasks, as well as mark them as pending, in-progress, or completed. The dashboard provides a clear overview of all your tasks with a modern, responsive UI.

## ✨ Features

### 📊 Dashboard
- **Kanban Board**: Drag-and-drop tasks between "Pending" and "In Progress" states.
- **List View**: Switch to a traditional list view for a compact overview.
- **Filtering**: Search by title/description and filter by status or priority.
- **Quick Actions**: View, Edit, Delete, and Mark as Done directly from the card.

![Dashboard Light](./assets/dashboard-light.png)

### ✅ Completed Tasks
- **Dedicated View**: Separate page for all completed tasks to keep your dashboard clutter-free.
- **History**: Review your accomplishments with the same powerful filtering options.

![Completed Tasks](./assets/completed-tasks.png)

### 🌓 Dark Mode
- **Theme Toggle**: seamless switch between Light and Dark modes.
- **Persistent Preference**: Your theme choice is saved for your next visit.

![Dashboard Dark](./assets/dashboard-dark.png)

### 📝 Task Management
- **Smart Forms**: Add and Edit tasks with pre-filled data.
- **Priority Levels**: Categorize tasks by Low (Green), Medium (Yellow), and High (Red) priority.
- **Due Dates**: Track deadlines with calendar integration.

![Add Task](./assets/add-task.png)

### 🎨 Modern UI
- **Responsive Design**: Works perfectly on desktop and mobile.
- **Animations**: Smooth transitions entering/leaving the list.
- **Interactive**: Hover effects and tooltips for better UX.

## 🛠️ Tech Stack
- **Frontend:** React, Redux, Bootstrap, jQuery, jQuery UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## 📦 Setup Instructions

### Prerequisites
- Node.js & npm
- MongoDB (running locally on default port)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd fsui-assignment
```

### 2. Install dependencies
#### Backend (Root Directory)
```bash
npm install
```
#### Frontend
```bash
cd client1
npm install
cd ..
```

### 3. Start the application
#### Start MongoDB (if not already running)
Make sure your MongoDB server is running locally on `mongodb://localhost:27017`.

#### Run Both (Recommended)
You can run both the backend and frontend concurrently with a single command from the root directory:
```bash
npm run dev:full
```

#### Or Run Individually
**Backend:**
```bash
npm run dev
# OR
node server.js
```

**Frontend:**
```bash
cd client1
npm start
```

### 4. Open in Browser
Visit [http://localhost:3002](http://localhost:3002) to use the Task Manager.

## 🖥️ Usage
- **Dashboard**: View active tasks (Pending/In-Progress). Use filters to search or sort.
- **View Task**: Click "View" on a card to see full details in a read-only page.
- **Completed Tasks**: Access the "Completed Tasks" page from the Navbar to see finished work.
- **Add Task**: Click "+ Add Task" in the Navbar or Dashboard.
- **Edit Task**: Click "Edit" on a card or "Edit Task" in the details view to modify.
- **Mark Complete**: Click "Done" on a card or "Mark as Complete" in details to move to Completed list.

## 📁 Project Structure
```
fsui-assignment/
├── client1/         # React frontend
├── server.js       # Express backend
└── ...
```

## 🙏 Credits
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [jQuery UI](https://jqueryui.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

Feel free to customize and enhance this project for your needs! 
