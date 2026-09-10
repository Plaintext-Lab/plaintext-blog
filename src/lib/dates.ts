// Date helpers resolve in the site's configured time zone rather than the
// machine's, so a build on a UTC runner prints the same dates a reader in
// that zone would expect.

export function currentYear(timeZone: string, now: Date = new Date()): number {
  const year = new Intl.DateTimeFormat('en', {
    timeZone,
    year: 'numeric',
  }).format(now);
  return Number.parseInt(year, 10);
}
