import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask, deleteTask } from '../store/taskSlice';

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const task = tasks.find(t => t._id === id);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(id)).then(() => navigate('/'));
    }
  };

  const handleComplete = () => {
    dispatch(updateTask({
      id,
      task: { status: 'completed' }
    }));
  };

  if (!task) {
    return <div className="text-center mt-5">Task not found</div>;
  }

  return (
    <div className="container mt-4">
      <button
        className="btn btn-link text-decoration-none mb-3 ps-0"
        onClick={() => navigate(-1)}
      >
        <i className="fas fa-arrow-left me-2"></i>Back
      </button>

      <div className="card shadow-sm">
        <div className="card-body p-5">
          <div className="d-flex justify-content-between align-items-start mb-4">
            <h2 className="card-title mb-0">{task.title}</h2>
            <span className={`status-badge status-${task.status}`}>
              {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
            </span>
          </div>

          <div className="d-flex gap-3 mb-4">
            <span className={`priority-badge ${task.priority}`}>
              <i className="fas fa-star me-1"></i>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
            </span>
            {task.dueDate && (
              <span className="text-muted">
                <i className="far fa-calendar-alt me-2"></i>
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>

          <div className="mb-5">
            <h5 className="text-muted mb-3">Description</h5>
            <p className="card-text fs-5">{task.description}</p>
            <p className="text-muted mt-4 small">
              Created on: {new Date(task.createdAt || Date.now()).toLocaleDateString()}
            </p>
          </div>

          <div className="d-flex gap-3 border-top pt-4">
            <button
              className="btn btn-outline-primary px-4"
              onClick={() => navigate(`/add-task/${id}`)}
            >
              <i className="fas fa-edit me-2"></i>Edit Task
            </button>

            {task.status !== 'completed' && (
              <button
                className="btn btn-outline-success px-4"
                onClick={handleComplete}
              >
                <i className="fas fa-check me-2"></i>Mark as Complete
              </button>
            )}

            <button
              className="btn btn-outline-danger px-4 ms-auto"
              onClick={handleDelete}
            >
              <i className="fas fa-trash me-2"></i>Delete Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails; 