import { Navbar as HeroNavbar, NavbarItem } from '@heroui/navbar';
import { Link, useLocation } from 'react-router-dom';

import { siteConfig } from '@/config/site';

export default function Navbar() {
  const loc = useLocation();

  return (
    <HeroNavbar>
      {siteConfig.navMenuItems.map((nav) => (
        <NavbarItem key={nav.href} isActive={loc.pathname === nav.href}>
          <Link to={nav.href}>{nav.label}</Link>
        </NavbarItem>
      ))}
    </HeroNavbar>
  );
}
