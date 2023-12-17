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
import { useCallback, useEffect, useState } from 'react';
import { Button } from '../ui/button';

type ProfileDropdownUser = {
  name: string | null;
  avatar: string | null;
};

export default function ProfileDropdown() {
  const [user, setUser] = useState<ProfileDropdownUser>({
    name: null,
    avatar: null,
  });

  const getSession = useCallback(async () => {
    try {
      const response = await fetch('/api/auth/session');
      const data = await response.json();

      if (data) {
        const { name, image } = data.user;
        setUser({
          name,
          avatar: image,
        });
      } else {
        setUser({
          name: null,
          avatar: null,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getSession();
  }, []);

  if (!user.name || !user.avatar) {
    return (
      <div className="fixed right-4 top-2" onClick={async () => signIn()}>
        <Button>Sign in</Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed right-4 top-2 focus:outline-none">
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
