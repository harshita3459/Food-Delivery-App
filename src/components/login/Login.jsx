import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy validation
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }
        setError("");
        alert("Login successful! (Demo only)");
    };

    return (
        <div className="container flex justify-center items-center" style={{ minHeight: "70vh" }}>
            <form className="card p-6" style={{ minWidth: 320, maxWidth: 400 }} onSubmit={handleSubmit}>
                <h2 className="mb-4 text-center">Login</h2>
                {error && <div className="mb-2 text-orange-600">{error}</div>}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Email</label>
                    <input
                        type="email"
                        className="w-full p-4 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Password</label>
                    <input
                        type="password"
                        className="w-full p-4 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="w-full">Login</button>
            </form>
        </div>
    );
};

export default Login;
