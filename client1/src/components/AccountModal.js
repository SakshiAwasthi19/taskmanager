import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDetails } from '../store/authSlice';
import { FaPen } from 'react-icons/fa';

function AccountModal({ show, onClose }) {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [password, setPassword] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    if (!show || !user) return null;

    const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';

    const handleSave = () => {
        const userData = {
            name,
            email,
            password: password || undefined, // Only send password if changed
        };
        dispatch(updateDetails(userData));
        setIsEditing(false);
        onClose();
    };

    return (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h5 className="modal-title fw-bold text-secondary">ACCOUNT</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex align-items-center mb-4">
                            <div
                                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    backgroundColor: '#f57c00', // Orange color from screenshot
                                    color: 'white',
                                    fontSize: '2.5rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                {initial}
                            </div>
                            <div className="flex-grow-1">
                                {isEditing ? (
                                    <input
                                        type="text"
                                        className="form-control mb-2 fs-4 fw-bold"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                ) : (
                                    <h2 className="fw-bold mb-0">{user.name}</h2>
                                )}

                                <hr className="my-2" />

                                <div className="d-flex align-items-center justify-content-between">
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    ) : (
                                        <span className="text-muted">{user.email}</span>
                                    )}
                                    <button className="btn btn-link text-secondary p-0 ms-2" onClick={() => setIsEditing(!isEditing)}>
                                        <FaPen size={14} />
                                    </button>
                                </div>
                                {isEditing && (
                                    <div className="mt-2">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="New Password (optional)"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-0 bg-light">
                        <button type="button" className="btn btn-link text-decoration-none text-secondary fw-bold" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-dark fw-bold px-4" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountModal;
