"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async () => {
    await authClient.signIn.email(
      { email, password },
      {
        async onSuccess(context) {
          if (context.data.twoFactorRedirect) {
            router.push("/two-factor");
          } else {
            router.push("/dashboard");
          }
        },
      },
    );
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-800 flex items-center justify-center p-6">
        <div className="bg-blue-800/20 shadow p-8 rounded max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

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
