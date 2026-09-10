export type NavigationItem = {
  label: string;
  href: string;
};

// Primary navigation, in display order. Routes are added here as they ship.
export const navigation: readonly NavigationItem[] = [
  {label: 'Home', href: '/'},
];

// A nav item is current when the path is the item itself or one of its
// descendants, so /posts/some-post still highlights Posts. Home only matches
// exactly, otherwise it would be selected everywhere.
export function isCurrentPath(pathname: string, href: string): boolean {
  const normalizedPath = stripTrailingSlash(pathname);
  const normalizedHref = stripTrailingSlash(href);
  if (normalizedHref === '') {
    return normalizedPath === '';
  }
  return (
    normalizedPath === normalizedHref ||
    normalizedPath.startsWith(`${normalizedHref}/`)
  );
}

function stripTrailingSlash(path: string): string {
  return path.replace(/\/+$/, '');
}
