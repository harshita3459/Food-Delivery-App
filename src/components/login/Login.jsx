import React, { useState } from "react";

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
        alert(`${isSignUp ? "Sign Up" : "Login"} successful! (Demo only)`);
    };

    return (
        <div className="container flex justify-center items-center" style={{ minHeight: "70vh" }}>
            <form className="card p-6" style={{ minWidth: 320, maxWidth: 400 }} onSubmit={handleSubmit}>
                <h2 className="mb-4 text-center">{isSignUp ? "Sign Up" : "Login"}</h2>
                {error && <div className="mb-2 text-red-600">{error}</div>}

                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Email</label>
                    <input
                        type="email"
                        className="w-full p-3 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Password</label>
                    <input
                        type="password"
                        className="w-full p-3 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {isSignUp && (
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full p-3 border rounded"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                )}

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
                    {isSignUp ? "Sign Up" : "Login"}
                </button>

                <div className="mt-4 text-center">
                    {isSignUp ? (
                        <p>
                            Already have an account?{" "}
                            <span className="text-blue-600 cursor-pointer" onClick={() => setIsSignUp(false)}>
                                Login
                            </span>
                        </p>
                    ) : (
                        <p>
                            New user?{" "}
                            <span className="text-blue-600 cursor-pointer" onClick={() => setIsSignUp(true)}>
                                Sign Up
                            </span>
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Login;
