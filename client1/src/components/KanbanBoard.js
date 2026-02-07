import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../store/taskSlice';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import './TaskCard.css'; // Reuse existing styles

const KanbanBoard = ({ tasks, onTaskUpdate, visibleColumns = ['pending', 'in-progress', 'completed'] }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allColumns = {
        pending: { title: 'Pending', items: tasks.filter(t => t.status === 'pending') },
        'in-progress': { title: 'In Progress', items: tasks.filter(t => t.status === 'in-progress') },
        completed: { title: 'Completed', items: tasks.filter(t => t.status === 'completed') }
    };

    const columns = Object.entries(allColumns).filter(([key]) => visibleColumns.includes(key));
    const colClass = `col-md-${12 / columns.length}`; // Dynamic width based on visible columns

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const { source, destination, draggableId } = result;

        if (source.droppableId !== destination.droppableId) {
            // Status change
            const newStatus = destination.droppableId;
            dispatch(updateTask({
                id: draggableId,
                task: { status: newStatus }
            }));
        }
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            dispatch(deleteTask(id));
        }
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="row">
                {columns.map(([columnId, column]) => (
                    <div className={`${colClass} mb-4`} key={columnId}>
                        <div className={`card h-100 bg-light-subtle shadow-sm kanban-column ${columnId}`}>
                            <div className="card-header fw-bold text-uppercase border-bottom-0 py-3">
                                <span className={`status-badge status-${columnId} me-2`}>•</span>
                                {column.title} ({column.items.length})
                            </div>
                            <div className="card-body p-2" style={{ minHeight: '500px' }}>
                                <Droppable droppableId={columnId}>
                                    {(provided, snapshot) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className={`h-100 rounded transition-colors ${snapshot.isDraggingOver ? 'bg-primary-subtle' : ''}`}
                                            style={{ minHeight: '100%' }}
                                        >
                                            {column.items.map((task, index) => (
                                                <Draggable key={task._id} draggableId={task._id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="card mb-2 shadow-sm task-card border-0"
                                                            style={{
                                                                ...provided.draggableProps.style,
                                                                opacity: snapshot.isDragging ? 0.8 : 1,
                                                            }}
                                                        >
                                                            <div className="card-body p-3">
                                                                <div className="d-flex justify-content-between mb-2">
                                                                    <div className={`priority-badge ${task.priority} small`}>
                                                                        {task.priority || 'medium'}
                                                                    </div>
                                                                </div>
                                                                <h6 className="card-title mb-1 text-truncate">{task.title}</h6>
                                                                <p className="card-text small text-muted text-truncate mb-3">
                                                                    {task.description}
                                                                </p>

                                                                <div className="d-flex justify-content-end gap-1 task-actions">
                                                                    <button
                                                                        className="btn btn-sm btn-link text-primary p-0 px-1"
                                                                        onClick={() => navigate(`/task/${task._id}`)}
                                                                        title="View"
                                                                    >
                                                                        <FaSearch size="0.8rem" />
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-sm btn-link text-secondary p-0 px-1"
                                                                        onClick={() => navigate(`/add-task/${task._id}`)}
                                                                        title="Edit"
                                                                    >
                                                                        <FaEdit size="0.8rem" />
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-sm btn-link text-danger p-0 px-1"
                                                                        onClick={() => handleDelete(task._id)}
                                                                        title="Delete"
                                                                    >
                                                                        <FaTrash size="0.8rem" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
};

export default KanbanBoard;
