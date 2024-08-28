// src/app/customer/dashboard/page.tsx
"use client";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-white">Welcome to Your Dashboard</h1>
      <p className="mt-4 text-xl text-gray-300">This is where you can manage your account, view your profile, and more.</p>
      <div className="mt-6">
        {/* Add more dashboard widgets or content here */}
      </div>
    </div>
  );
}
