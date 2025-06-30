'use client';

import { useQuery } from '@tanstack/react-query';
import Usercard from '@/components/Usercard';

type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  image: string
};

async function getAllUsers(): Promise<UserType[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`);
  const data = await response.json();
  return data.users;
}

export default function Home() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers,
  });

  if (isLoading) {
    return (
      <div
        aria-label="Loading..."
        role="status"
        className="flex items-center justify-center min-h-screen space-x-4"
      >
        <svg
          className="h-16 w-16 animate-spin stroke-gray-500"
          viewBox="0 0 256 256"
          fill="none"
        >
          <circle
            cx="128"
            cy="128"
            r="96"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="48 48"
          />
        </svg>
        <span className="text-2xl font-medium text-gray-500">Loading...</span>
      </div>
    );
  }

  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
      {users?.map((user) => (
        <Usercard key={user.id} user={user} />
      ))}
    </main>
  );
}
