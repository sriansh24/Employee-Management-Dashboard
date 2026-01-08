import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import '../../assets/styles/EmdLogin/emdlogin.css';

const EmdLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
        <div className="emd-login-bg-color emd-login-wrapper">
            <div className="container d-flex justify-content-center align-item-center">
                <div className="card shadow p-5 emd-login-card">
                    <h4 className="text-center mb-3">Employee Management Dashboard</h4>

                    {error && <div className="alert alert-danger py-2">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 position-relative">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <div className="input-group">
                                <span className="input-group-text bg-white">
                                    <Mail size={18} />
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setError('');
                                    }}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4 position-relative">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="input-group">
                                <span className="input-group-text bg-white">
                                    <Lock size={18} />
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="form-control"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        setError('');
                                    }}
                                    required
                                />
                                <span
                                    className="input-group-text bg-white hand-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </span>

                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmdLogin;