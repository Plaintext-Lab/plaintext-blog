// Single source of truth for site-wide facts. Every page, feed and metadata
// route reads from here so a change lands everywhere at once.
export const site = {
  name: 'Plaintext Lab',
  url: 'https://plaintextlab.com',
  description:
    'Notes on building software with coding agents: the projects, the decisions, the dead ends and the lessons.',
  author: {
    name: 'Ryan Foyle',
    email: 'hi@plaintextlab.com',
  },
  repository: 'https://github.com/Plaintext-Lab/plaintext-blog',
  locale: 'en-AU',
  // Dates on the site are rendered in this zone. Change it here if the site
  // is ever run from somewhere else; nothing downstream assumes Melbourne.
  timeZone: 'Australia/Melbourne',
  // PostHog project for site analytics. The project key is public by design:
  // it only allows sending events, and every visitor's browser receives it.
  posthog: {
    projectKey: 'phc_rJyMXYsXJKvvqUqHKcRbpJHWRU8qQbtKY3wgM9TyByts',
    apiHost: 'https://us.i.posthog.com',
  },
} as const;

export type SiteConfig = typeof site;
