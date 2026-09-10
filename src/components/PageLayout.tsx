import {Layout, LayoutContent} from '@astryxdesign/core/Layout';
import type {ReactNode} from 'react';
import {PAGE_PADDING, PROSE_WIDTH} from '@/config/layout';

type PageLayoutProps = {
  children: ReactNode;
};

// The one content frame every page and the footer share: a capped, centred
// column with the page padding, so all text sits on the same content line.
export function PageLayout({children}: PageLayoutProps) {
  return (
    <Layout height="auto" contentWidth={PROSE_WIDTH} padding={PAGE_PADDING}>
      <LayoutContent isScrollable={false}>{children}</LayoutContent>
    </Layout>
  );
}
