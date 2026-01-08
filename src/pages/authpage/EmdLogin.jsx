import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EmdLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const VALID_EMAIL = "admin.a01@gmail.com";
    const VALID_PASSWORD = "AdminA01";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userEmail", email);
            navigate('/emd-dashboard');
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-item-center vh-100">
            <div className="card shadow p-4" style={{ width: '360px' }}>
                <h4 className="text-center mb-3">Employee Management Dashboard</h4>

                {error && <div className="alert alert-danger py-2">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control mb-3"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setError('');
                            }}
                            required
                        />

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control mb-3"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setError('');
                                }}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
};

export default EmdLogin;