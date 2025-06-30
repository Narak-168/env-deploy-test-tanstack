'use client';

import Image from "next/image";

type Props = {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    username: string;
    image: string;
  };
};

export default function Usercard({ user }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow border hover:shadow-lg transition-all space-y-4">
      {/* Profile Image */}
      <div className="flex justify-center">
        <Image
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-24 h-24 rounded-full object-cover border"
          unoptimized
          width={100}
          height={100}
        />
      </div>

      {/* User Info */}
      <div className="text-center">
        <h3 className="text-xl font-semibold">
          {user.firstName} {user.lastName}
        </h3>
        <p className="text-gray-500">@{user.username}</p>
      </div>

      <div className="text-sm text-gray-700 space-y-1">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
}
