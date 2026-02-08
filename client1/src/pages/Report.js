import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FaCheckCircle, FaHourglassHalf, FaFire, FaClipboardList } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

function Report() {
    const { tasks } = useSelector((state) => state.tasks);
    const { theme } = useTheme();

    const stats = useMemo(() => {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter((task) => task.status === 'completed').length;
        const pendingTasks = tasks.filter((task) => task.status !== 'completed').length;

        // Calculate streak
        // Sort completed tasks by update date
        const sortedCompleted = [...tasks]
            .filter((task) => task.status === 'completed')
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

        let streak = 0;
        if (sortedCompleted.length > 0) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const lastTaskDate = new Date(sortedCompleted[0].updatedAt);
            lastTaskDate.setHours(0, 0, 0, 0);

            // If last task was today or yesterday, streak is active
            const diffTime = Math.abs(today - lastTaskDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays <= 1) {
                streak = 1;
                let currentDate = lastTaskDate;

                for (let i = 1; i < sortedCompleted.length; i++) {
                    const taskDate = new Date(sortedCompleted[i].updatedAt);
                    taskDate.setHours(0, 0, 0, 0);

                    const dayDiff = Math.abs(currentDate - taskDate) / (1000 * 60 * 60 * 24);

                    if (dayDiff === 1) {
                        streak++;
                        currentDate = taskDate;
                    } else if (dayDiff === 0) {
                        continue; // Same day, ignore
                    } else {
                        break; // Streak broken
                    }
                }
            }
        }

        return { totalTasks, completedTasks, pendingTasks, streak };
    }, [tasks]);

    const chartData = useMemo(() => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const last7Days = [];

        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];

            // Count tasks completed on this day
            const completedCount = tasks.filter(task => {
                if (task.status !== 'completed') return false;
                const taskDate = new Date(task.updatedAt).toISOString().split('T')[0];
                return taskDate === dateStr;
            }).length;

            last7Days.push({
                name: days[d.getDay()],
                completed: completedCount,
                fullDate: dateStr
            });
        }
        return last7Days;
    }, [tasks]);

    const textColor = theme === 'dark' ? '#fff' : '#000';
    const cardBg = theme === 'dark' ? 'bg-secondary text-white' : 'bg-white shadow-sm';

    return (
        <div className={`container py-5 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
            <h2 className="mb-4 fw-bold">Analytics & Productivity</h2>

            {/* Stats Cards */}
            <div className="row g-4 mb-5">
                <div className="col-md-3">
                    <div className={`card ${cardBg} h-100 border-0`}>
                        <div className="card-body d-flex align-items-center">
                            <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                                <FaClipboardList className="text-primary fs-3" />
                            </div>
                            <div>
                                <h6 className="card-subtitle mb-1 text-muted">Total Tasks</h6>
                                <h3 className="card-title fw-bold mb-0">{stats.totalTasks}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={`card ${cardBg} h-100 border-0`}>
                        <div className="card-body d-flex align-items-center">
                            <div className="rounded-circle bg-success bg-opacity-10 p-3 me-3">
                                <FaCheckCircle className="text-success fs-3" />
                            </div>
                            <div>
                                <h6 className="card-subtitle mb-1 text-muted">Completed</h6>
                                <h3 className="card-title fw-bold mb-0">{stats.completedTasks}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={`card ${cardBg} h-100 border-0`}>
                        <div className="card-body d-flex align-items-center">
                            <div className="rounded-circle bg-warning bg-opacity-10 p-3 me-3">
                                <FaHourglassHalf className="text-warning fs-3" />
                            </div>
                            <div>
                                <h6 className="card-subtitle mb-1 text-muted">Pending</h6>
                                <h3 className="card-title fw-bold mb-0">{stats.pendingTasks}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={`card ${cardBg} h-100 border-0`}>
                        <div className="card-body d-flex align-items-center">
                            <div className="rounded-circle bg-danger bg-opacity-10 p-3 me-3">
                                <FaFire className="text-danger fs-3" />
                            </div>
                            <div>
                                <h6 className="card-subtitle mb-1 text-muted">Current Streak</h6>
                                <h3 className="card-title fw-bold mb-0">{stats.streak} Days</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts */}
            <div className="row g-4">
                <div className="col-lg-8">
                    <div className={`card ${cardBg} border-0`}>
                        <div className="card-body">
                            <h5 className="card-title fw-bold mb-4">Tasks Completed (Last 7 Days)</h5>
                            <div style={{ height: '300px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#555' : '#eee'} />
                                        <XAxis dataKey="name" stroke={textColor} />
                                        <YAxis allowDecimals={false} stroke={textColor} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: theme === 'dark' ? '#333' : '#fff',
                                                color: textColor,
                                                border: 'none',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                            }}
                                        />
                                        <Bar dataKey="completed" fill="#0d6efd" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`card ${cardBg} border-0 h-100`}>
                        <div className="card-body">
                            <h5 className="card-title fw-bold mb-4">Productivity Trend</h5>
                            <div style={{ height: '300px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#555' : '#eee'} />
                                        <XAxis dataKey="name" stroke={textColor} />
                                        <YAxis allowDecimals={false} stroke={textColor} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: theme === 'dark' ? '#333' : '#fff',
                                                color: textColor,
                                                border: 'none',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                            }}
                                        />
                                        <Line type="monotone" dataKey="completed" stroke="#198754" strokeWidth={3} dot={{ r: 4 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Report;
