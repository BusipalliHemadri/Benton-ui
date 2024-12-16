import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { cn } from "../lib/utils";
// import { Button } from "./ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "../";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export function LoginForm({
    onLogin,
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'> & { onLogin: () => void }) {
    const [error, setError] = useState<string | null>(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const username = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();

        if (username === "admin" && password === "admin") {
            setError(null);
            onLogin();
            navigate("/properties");
        } else {
            setError("Invalid username or password. Please try again.");
        }
    };

    return (
        <div
            className={cn(
                "min-h-screen flex items-center justify-center bg-[#f3f4f6]",
                className
            )}
            {...props}
        >
            <Card className="w-full max-w-sm shadow-lg bg-white border-gray-300 rounded-lg">
                <CardHeader className="flex justify-center mb-4">
                    <CardTitle className="text-2xl text-gray-800 text-center">
                        Log in to your account
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            {/* Email Field */}
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-gray-800">
                                    Username
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Enter username"
                                    required
                                    className="bg-white text-gray-800 border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
                                    onChange={() => setError(null)} // Clear error on change
                                />
                            </div>

                            {/* Password Field */}
                            <div className="grid gap-2">
                                <Label htmlFor="password" className="text-gray-800">
                                    Password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={passwordVisible ? "text" : "password"}
                                        placeholder="Enter password"
                                        required
                                        className="bg-white text-gray-800 border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none pr-12" // Add padding to ensure icon doesn't overlap text
                                        onChange={() => setError(null)} // Clear error on change
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-800"
                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                    >
                                        {passwordVisible ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                            </div>


                            {/* Forgot Password */}
                            <div className="text-right">
                                <button
                                    type="button"
                                    onClick={() => navigate("/forgot-password")}
                                    className="text-sm text-gray-600 hover:text-gray-800"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <p className="text-sm text-red-500 text-center">{error}</p>
                            )}

                            {/* Login Button */}
                            <Button
                                type="submit"
                                className="w-full bg-gray-800 text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:outline-none"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
