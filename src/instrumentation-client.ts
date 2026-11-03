import posthog from 'posthog-js';
import {site} from '@/config/site';

// Next.js runs this file in the browser before the app hydrates. The
// `defaults` preset records a pageview on every client-side navigation, so
// next/link route changes are counted. Dev servers stay out of the data.
if (process.env.NODE_ENV === 'production') {
  posthog.init(site.posthog.projectKey, {
    api_host: site.posthog.apiHost,
    defaults: '2026-08-30',
  });
}
