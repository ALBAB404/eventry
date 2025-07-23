'use client'
import { performLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const { setAuth } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const user = await performLogin(formData);
      if (user) {
        setAuth(user);
        router.push('/');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {/* email */}
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>
      {/* password */}
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
