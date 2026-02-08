import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Report from './pages/Report';
import ProtectedRoute from './components/ProtectedRoute';

import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container mt-4">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Dashboard showCompletedOnly={false} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/completed"
                  element={
                    <ProtectedRoute>
                      <Dashboard showCompletedOnly={true} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/add"
                  element={
                    <ProtectedRoute>
                      <AddTask />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/add-task"
                  element={
                    <ProtectedRoute>
                      <AddTask />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/add-task/:id"
                  element={
                    <ProtectedRoute>
                      <AddTask />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/edit/:id"
                  element={
                    <ProtectedRoute>
                      <AddTask />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/task/:id"
                  element={
                    <ProtectedRoute>
                      <TaskDetails />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/report"
                  element={
                    <ProtectedRoute>
                      <Report />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
            <ToastContainer />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
