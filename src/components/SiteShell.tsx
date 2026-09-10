'use client';

import {usePathname} from 'next/navigation';
import {AppShell} from '@astryxdesign/core/AppShell';
import {Layout} from '@astryxdesign/core/Layout';
import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';
import type {ReactNode} from 'react';
import {isCurrentPath, navigation} from '@/config/navigation';
import {site} from '@/config/site';
import {SiteFooter} from './SiteFooter';

type SiteShellProps = {
  children: ReactNode;
};

// Page frame for every route: sticky top navigation, content that grows with
// the page, and a shared footer. Pages own their headings and their own
// width budget; the shell renders neither.
export function SiteShell({children}: SiteShellProps) {
  const pathname = usePathname();

  return (
    <AppShell
      height="auto"
      variant="surface"
      contentPadding={0}
      topNav={
        <TopNav
          label="Main navigation"
          heading={<TopNavHeading heading={site.name} headingHref="/" />}
          startContent={navigation.map((item) => (
            <TopNavItem
              key={item.href}
              label={item.label}
              href={item.href}
              isSelected={isCurrentPath(pathname, item.href)}
            />
          ))}
        />
      }>
      <Layout height="auto" content={children} footer={<SiteFooter />} />
    </AppShell>
  );
}
