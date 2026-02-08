import React from 'react';
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';

function Profile() {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body text-center">
                            <FaUserCircle size={100} className="text-secondary mb-3" />
                            <h2 className="card-title mb-4">User Profile</h2>

                            <div className="text-start">
                                <div className="mb-3">
                                    <label className="fw-bold text-muted">Name</label>
                                    <p className="fs-5">{user ? user.name : 'N/A'}</p>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-bold text-muted">Email</label>
                                    <p className="fs-5">{user ? user.email : 'N/A'}</p>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-bold text-muted">User ID</label>
                                    <p className="small text-muted">{user ? user._id : 'N/A'}</p>
                                </div>
                            </div>

                            <div className="alert alert-info mt-4">
                                Profile editing features coming soon!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
