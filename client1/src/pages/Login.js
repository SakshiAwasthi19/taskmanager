import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../store/authSlice';
import Spinner from '../components/Spinner'; // We assume a Spinner component might exist or use simple loading text

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message); // Using toast if available, or we can use simple alert
            alert(message); // Fallback
        }

        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email,
            password,
        };

        dispatch(login(userData));
    };

    if (isLoading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <section className="heading text-center mb-4">
                        <h1>
                            <FaSignInAlt /> Login
                        </h1>
                        <p>Login to start managing tasks</p>
                    </section>

                    <section className="form">
                        <form onSubmit={onSubmit}>
                            <div className="form-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    placeholder="Enter your email"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={password}
                                    placeholder="Enter password"
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-primary btn-block">
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className="text-center mt-3">
                            <p>Don't have an account? <a href="/register">Register</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Login;
