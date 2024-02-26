import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [fullname, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!fullname || !phone || !email || !password) {
            setError('Please enter all details.');
            return;
        }
        
        axios.post('http://localhost:3005/register', { fullname, phone, email, password })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        
        <div className="d-flex flex-column justify-content-center align-items-center " style={{ backgroundColor: '#00A7F8', minHeight: '100vh' }}>
            
            <h2 className="text-white mt-5"> Create Account </h2>
            <div className="mt-3">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="Signup" width="200" />
            </div>
            <div className="bg-white p-3 rounded w-25">
                <form onSubmit={handleSubmit}>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="mb-3">
                        <label htmlFor="fullname">
                            <strong>FullName</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter FullName"
                            autoComplete="off"
                            name="fullname"
                            className="form-control rounded-0"
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">
                            <strong>Phone</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Phone"
                            autoComplete="off"
                            name="phone"
                            className="form-control rounded-0"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
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
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Signup
                    </button>
                </form>
                <p>Already have an account</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
