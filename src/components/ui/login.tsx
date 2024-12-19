
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFrappeAuth } from "frappe-react-sdk";
import { FiMail, FiLock } from "react-icons/fi";
import React from "react";

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { login } = useFrappeAuth();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!email || !password) {
            setError("Please fill in both username and password.");
            return;
        }
        try {
            const Response = await login({ username: email, password });
            if (Response.message === 'Logged In') {
                onLogin()
                navigate("/properties");
                console.log(Response, 'responmse')
            }

        } catch (err) {
            setError("Login failed. Please check your username and password.");
        }
    };

    // const handleSubmit = async () => {

    //     try {
    //         const Response = await login({ username: email, password });
    //         if (Response.message === 'Logged In') {
    //             onLogin()
    //             navigate("/properties");
    //             console.log(Response, 'responmse')
    //         }

    //     } catch (error) {
    //         console.error("Login failed", error);
    //     }
    // };
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
            <div className="w-[400px] bg-white shadow-lg rounded-lg p-6">
                <h5 className="text-center text-2xl font-semibold mb-2">Login</h5>

                {/* Email Input */}
                <div className="relative mb-4">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FiMail size={16} />
                    </span>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            // setError(null); 
                        }}
                        placeholder="Administrator"
                        className="w-full pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                {/* Password Input */}
                <div className="relative mb-4">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FiLock size={16} />
                    </span>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            // setError(null);
                        }}
                        placeholder="Password"
                        className="w-full pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-[14px]"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>

                {error && (
                    <p className="text-red-500 text-sm text-center mb-4">{error}</p>
                )}

                <div className="text-right mb-4">
                    <a href="/forgot-password" className="text-gray-600 text-sm hover:underline">
                        Forgot Password?
                    </a>
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-black text-white py-1 border rounded-md hover:bg-gray-800 transition"
                >
                    Login
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center mt-4">
                    <span className="text-gray-400">or</span>
                </div>

                {/* Login with Email Link Button */}
                <button
                    onClick={() => alert("Login with Email Link")}
                    className="w-full mt-4 bg-gray-200 py-1 rounded-md hover:bg-gray-300 transition"
                >
                    Login with Email Link
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
