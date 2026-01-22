"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async () => {
    (await authClient.signUp.email({ name, email, password }),
      router.push("/signin"));
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-800 flex items-center justify-center p-6">
        <div className="bg-blue-800/20 shadow p-8 rounded max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

          <input
            className="w-full mb-4 border px-3 py-2 rounded"
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full mb-4 border px-3 py-2 rounded"
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full mb-4 border px-3 py-2 rounded"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={submit}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            SignIn{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
