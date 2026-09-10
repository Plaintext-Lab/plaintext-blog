import {describe, expect, it} from 'vitest';
import {isCurrentPath, navigation} from './navigation';

describe('isCurrentPath', () => {
  it('matches home only on the exact root path', () => {
    expect(isCurrentPath('/', '/')).toBe(true);
    expect(isCurrentPath('/posts/', '/')).toBe(false);
    expect(isCurrentPath('/about', '/')).toBe(false);
  });

  it('matches a section and its descendants regardless of trailing slash', () => {
    expect(isCurrentPath('/posts', '/posts')).toBe(true);
    expect(isCurrentPath('/posts/', '/posts')).toBe(true);
    expect(isCurrentPath('/posts/first-post/', '/posts')).toBe(true);
    expect(isCurrentPath('/posts-archive/', '/posts')).toBe(false);
  });

  it('does not match a sibling section', () => {
    expect(isCurrentPath('/projects/', '/posts')).toBe(false);
  });
});

describe('navigation', () => {
  it('links every item to a root-relative path', () => {
    for (const item of navigation) {
      expect(item.href.startsWith('/')).toBe(true);
      expect(item.label.length).toBeGreaterThan(0);
    }
  });
});
