"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export function NavBar() {
  const menuItems = [
    { link: "/", title: "home" },
    { link: "/photography", title: "photography" },
    { link: "/blog", title: "blog" },
    { link: "/about", title: "about" },
  ];
  return (
    <NavigationMenu className="mx-auto w-full">
      <NavigationMenuList>
        {menuItems.map((menuItem) => (
          <NavMenuItem link={menuItem.link} title={menuItem.title} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavMenuItem({ link, title }: { link: string; title: string }) {
  return (
    <NavigationMenuItem>
      <Link href={link} passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
