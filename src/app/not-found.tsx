import type {Metadata} from 'next';
import {Button} from '@astryxdesign/core/Button';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {PageLayout} from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFoundPage() {
  return (
    <PageLayout>
      <EmptyState
        headingLevel={1}
        title="Page not found"
        description="The address may be mistyped, or the page has moved."
        actions={<Button label="Go to the home page" href="/" />}
      />
    </PageLayout>
  );
}
