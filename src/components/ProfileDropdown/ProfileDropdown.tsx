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
import { Button } from '../ui/button';

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

  if (!user.name && !user.avatar) {
    return (
      <div className="fixed right-4 top-4" onClick={async () => signIn()}>
        <Button>Sign in</Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed right-4 top-4 focus:outline-none">
        <div className="flex items-center">
          {user.avatar ? (
            <Image
              src={user.avatar}
              className="rounded-full"
              alt="profile picture"
              width={40}
              height={40}
            />
          ) : null}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div onClick={async () => signOut()}>Sign out</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
