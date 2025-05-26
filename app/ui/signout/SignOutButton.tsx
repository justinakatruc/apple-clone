"use client";

import { logout } from '@/app/lib/actions';
import { useNavBar } from '@/app/context/NavBarContext';
import { redirect } from 'next/navigation';

interface SignOutButtonProps {
  className?: string;
  message?: string;
}

function SignOutButton({ className, message }: SignOutButtonProps) {
  const { setExpandMenu } = useNavBar();

  const handleLogout = async () => {
      setExpandMenu(false);
      const result = await logout();
      if (result === "success") {
        redirect("/shop/signIn");
      }
    };
  return (
    <button className={`cursor-pointer ${className}`} onClick={handleLogout}>
      {message || 'Sign out'}
    </button>
  );
}

export default SignOutButton;