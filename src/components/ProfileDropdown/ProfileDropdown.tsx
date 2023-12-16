'use client';

import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function ProfileDropdown() {
  const [user, setUser] = useState({
    name: null,
    avatar: null,
  });

  async function getSession() {
    try {
      const response = await fetch('/api/user/session');
      const { body } = await response.json();
      setUser({
        name: body.user.name,
        avatar: body.user.image,
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    (async () => {
      await getSession();
    })();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center">
          <h3>{user.name ?? 'Sign in'}</h3>
          {user.avatar ? (
            <Image
              src={user.avatar}
              className="rounded-full"
              alt="hi"
              width={50}
              height={50}
            />
          ) : null}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div onClick={async () => signIn()}>Sign in</div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div onClick={async () => signOut()}>Sign out</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
