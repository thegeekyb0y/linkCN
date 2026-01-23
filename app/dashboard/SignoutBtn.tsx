"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();
  const handleSignout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <button
      className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
      onClick={handleSignout}
    >
      Sign Out
    </button>
  );
}
