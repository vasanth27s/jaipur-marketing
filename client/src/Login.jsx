import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3005/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    navigate('/home');
                } else {
                    setErrorMessage("Incorrect email or password. Please try again.");
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#00A7F8', minHeight: '100vh'}}>
                <h2 className="text-white mt-5"> Login </h2>
                <div className="mt-3">
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="Login" width="200" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    )}
                    <div className="btn-group w-100" role="group" aria-label="Login and Signup buttons">
                        <button type="submit" className="btn btn-success w-50 rounded-0">
                            Login
                        </button>
                        <Link to="/register" className="btn btn-success w-50 rounded-0">
                            Signup
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
