import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {site} from '@/config/site';
import HomePage from './page';

describe('HomePage', () => {
  it('leads with the site name as the page heading', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(
      site.name,
    );
  });

  it('shows an empty state while there are no posts', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(
      'Latest posts',
    );
    expect(screen.getByText('No posts yet')).toBeInTheDocument();
  });
});
