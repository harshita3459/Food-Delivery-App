import React, { useState } from "react";
import "./Login.css";

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || (isSignUp && !confirmPassword)) {
            setError("Please fill all required fields.");
            return;
        }

        if (isSignUp && password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");
        alert(`${isSignUp ? "Sign Up" : "Login"} successful!`);
    };

    return (
        <div className="login-wrapper">
            <form className="login-card" onSubmit={handleSubmit}>
                <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
                {error && <div className="login-error">{error}</div>}

                <div className="login-field">
                    <label className="login-label">Email</label>
                    <input
                        type="email"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="login-field">
                    <label className="login-label">Password</label>
                    <input
                        type="password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {isSignUp && (
                    <div className="login-field">
                        <label className="login-label">Confirm Password</label>
                        <input
                            type="password"
                            className="login-input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                )}

                <button type="submit" className="login-button">
                    {isSignUp ? "Sign Up" : "Login"}
                </button>

                <div className="login-toggle">
                    {isSignUp ? (
                        <p>
                            Already have an account?{" "}
                            <span onClick={() => setIsSignUp(false)}>Login</span>
                        </p>
                    ) : (
                        <p>
                            New user?{" "}
                            <span onClick={() => setIsSignUp(true)}>Sign Up</span>
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Login;
