import {render, screen} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import {site} from '@/config/site';
import {SiteShell} from './SiteShell';

const pathname = vi.hoisted(() => ({current: '/'}));

vi.mock('next/navigation', () => ({
  usePathname: () => pathname.current,
}));

describe('SiteShell', () => {
  it('renders the main navigation with the current page marked', () => {
    pathname.current = '/';
    render(
      <SiteShell>
        <p>Page body</p>
      </SiteShell>,
    );
    const nav = screen.getByRole('navigation', {name: 'Main navigation'});
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'Home'})).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('renders page content inside the main landmark with a footer', () => {
    render(
      <SiteShell>
        <p>Page body</p>
      </SiteShell>,
    );
    expect(screen.getByRole('main')).toHaveTextContent('Page body');
    expect(screen.getByRole('contentinfo')).toHaveTextContent(site.author.name);
    expect(
      screen.getByRole('link', {name: 'Source on GitHub'}),
    ).toHaveAttribute('href', site.repository);
  });
});
