import API_URL from "@/config/apiUrl";
import { useState } from "react";

interface useAuthProps {
  name?: string;
  email: string;
  password: string;
}

export const useAuth = ({ name, email, password }: useAuthProps) => {
  const [message, setMessage] = useState<string | null>(null);

  async function handleLogin() {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }
      console.log(data);
      setMessage("Login successful");
      return data;
    } catch (error) {
      setMessage(error.message);
      console.error(error);
      return null;
    }
  }

  async function handleRegister() {
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      const data = await res.json();
      setMessage("Registration successful");
      return data;
    } catch (error) {
      setMessage("Registration failed");
      console.error(error);
    }
  }

  return {
    handleLogin,
    handleRegister,
    message,
  };
};
