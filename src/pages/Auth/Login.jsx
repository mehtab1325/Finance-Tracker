import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../component/layouts/AuthLayout';
import Input from '../../component/Inputs/Input';

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setError(null);
      setName(storedUser.fullName);
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center px-6">
        <h3 className="text-2xl font-semibold text-black mb-2">Welcome Back</h3>
        <p className="text-sm text-slate-700 mb-6">
          Please enter your details to log in
        </p>

        {name && <p className="mb-2 text-green-600">Hello, {name}!</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            LOGIN
          </button>

          <p className="text-sm mt-4 text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Signup
            </span>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
