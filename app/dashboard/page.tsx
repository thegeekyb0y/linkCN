import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <div className="p-10 text-center">
        <p>Please sign in first.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-900/10">
      <div className="bg-green-500/70 rounded-xl shadow max-w-xl mx-auto ">
        <h1 className="text-white text-3xl font-bold p-6 ">
          Welcome, {session.user.name ?? "User"}, How are you?
        </h1>
        <p className="text-gray-300 mb-4">
          Two Factor Authentication :{" "}
          {session.user.twoFactorEnabled ? "Enabled" : "Not Enabled"}
        </p>
      </div>
    </div>
  );
}
