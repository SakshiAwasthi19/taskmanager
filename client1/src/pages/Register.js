import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../store/authSlice';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        checkPassword: '',
    });

    const { name, email, password, checkPassword } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            alert(message);
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

        if (password !== checkPassword) {
            alert('Passwords do not match');
        } else {
            const userData = {
                name,
                email,
                password,
            };

            dispatch(register(userData));
        }
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
                            <FaUser /> Register
                        </h1>
                        <p>Please create an account</p>
                    </section>

                    <section className="form">
                        <form onSubmit={onSubmit}>
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    placeholder="Enter your name"
                                    onChange={onChange}
                                />
                            </div>
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
                            <div className="form-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="checkPassword"
                                    name="checkPassword"
                                    value={checkPassword}
                                    placeholder="Confirm password"
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
                            <p>Already have an account? <a href="/login">Login</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Register;
