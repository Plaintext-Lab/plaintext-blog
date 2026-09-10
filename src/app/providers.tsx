'use client';

import Link from 'next/link';
import {LinkProvider} from '@astryxdesign/core/Link';
import {Theme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral/built';
import type {ReactNode} from 'react';

type ProvidersProps = {
  children: ReactNode;
};

// Theme follows the reader's OS colour scheme. LinkProvider hands every
// Astryx link-based component (Link, TopNavItem, Breadcrumbs, ...) to
// next/link so navigation stays client-side.
export function Providers({children}: ProvidersProps) {
  return (
    <Theme theme={neutralTheme} mode="system">
      <LinkProvider component={Link}>{children}</LinkProvider>
    </Theme>
  );
}
