import React, { useState } from "react";
import Navbar from "./navbar";

const GoogleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">

  </svg>
);

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://vernis.onrender.com";

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || data.errors?.join(", ") || "Login failed");

    
      localStorage.setItem("token", data.token);
      alert(data.message);

      window.location.href = "/";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <video autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover z-0" src="/background.mp4" />
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-0"></div>
      <div className="fixed top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      <div className="relative z-10 flex items-center justify-center py-20 px-4 min-h-screen">
        <div className="w-full max-w-md p-8 md:p-10 bg-white/10 backdrop-blur-md rounded-[3rem] shadow-2xl border-4 border-amber-200/80 flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-amber-400 flex items-center justify-center">
            <span className="text-3xl text-indigo-700 font-bold">👤</span>
          </div>

          <h1 className="text-4xl font-extrabold text-amber-400 mt-6 mb-2">Login</h1>
          <p className="text-sm text-gray-300 text-center">Welcome back! Please log in to continue.</p>

          <form className="mt-6 w-full space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-transparent text-gray-50 border-2 border-amber-100"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-transparent text-gray-50 border-2 border-amber-100"
            />

            {error && <p className="text-red-400 text-sm mt-1">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-4 text-white font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-6 w-full">
            <p className="text-center text-gray-400 text-sm mb-4">OR</p>
            <button
              onClick={() => window.location.href = `${API_URL}/auth/google`} 
              className="w-full py-3 flex items-center justify-center space-x-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-300 hover:bg-gray-100"
            >
              <GoogleIcon className="w-6 h-6" />
              <span>Continue with Google</span>
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?
            <a href="/signup" className="text-amber-400 hover:text-amber-300 font-medium ml-1">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
