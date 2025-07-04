"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function AdminLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    secretCode: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
      secretCode: formData.secretCode,
    });

    setLoading(false);

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setStatus({ type: "error", message: "Invalid credentials or secret code" });
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="bg-black rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gold">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <input
            name="secretCode"
            type="text"
            placeholder="Secret Code"
            value={formData.secretCode}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <label className="text-sm flex items-center space-x-2 text-white">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <span>Show password</span>
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold text-black py-2 rounded-md hover:bg-yellow-600 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {status && (
            <p className={`text-sm mt-2 text-center ${status.type === "error" ? "text-red-500" : "text-green-600"}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
