'use client';

import Link from 'next/link';

import ProfileDropdown from './ProfileDropdown';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export async function NavBar() {
  const menuItems = [
    { link: '/', title: 'home' },
    { link: '/photography', title: 'photography' },
    { link: '/blog', title: 'blog' },
    { link: '/about', title: 'about' },
  ];

  return (
    <>
      <NavigationMenu className="mx-auto mt-2 w-full">
        <NavigationMenuList>
          {menuItems.map((menuItem) => (
            <NavMenuItem
              key={menuItem.link}
              link={menuItem.link}
              title={menuItem.title}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ProfileDropdown />
    </>
  );
}

function NavMenuItem({ link, title }: { link: string; title: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
        <Link href={link}>
          <p>{title}</p>
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
