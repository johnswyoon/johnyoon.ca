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

export default function ProfileDropdown() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut, openSignIn } = useClerk();

  if (!isLoaded) {
    return <h1>Is loading...</h1>;
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
          <div onClick={() => signOut()}>Sign out</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function getInitials(name: string) {
  const nameSplit = name.split(' ');
  const initials = nameSplit.map((name) => name[0].toUpperCase()).join('');
  return initials;
}
