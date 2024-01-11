'use client';

import { useClerk, useUser } from '@clerk/nextjs';

import { Button } from '../ui/button';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getInitials } from '@/lib/utils';

export default function ProfileDropdown() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { openSignIn, signOut, openUserProfile } = useClerk();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return (
      <div className="fixed right-4 top-2">
        <Button onClick={() => openSignIn()}>Sign in</Button>
      </div>
    );
  }

  const { fullName, imageUrl } = user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed right-4 top-2 focus:outline-none">
        <div className="flex items-center">
          {imageUrl ? (
            <Avatar>
              <AvatarImage src={imageUrl} />
              <AvatarFallback>
                {getInitials(fullName as string) ?? '?'}
              </AvatarFallback>
            </Avatar>
          ) : null}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{fullName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button
            className="w-full text-left"
            onClick={() => openUserProfile()}
          >
            Profile
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="w-full text-left" onClick={() => signOut()}>
            Sign out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
