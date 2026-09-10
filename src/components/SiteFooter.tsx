import {HStack} from '@astryxdesign/core/HStack';
import {LayoutFooter} from '@astryxdesign/core/Layout';
import {Link} from '@astryxdesign/core/Link';
import {Text} from '@astryxdesign/core/Text';
import {site} from '@/config/site';
import {currentYear} from '@/lib/dates';
import {PageLayout} from './PageLayout';

const LICENSE_URL = `${site.repository}/blob/main/LICENSE`;

// The footer shares the page frame, so its text sits on the content line.
export function SiteFooter() {
  return (
    <LayoutFooter role="contentinfo" hasDivider>
      <PageLayout>
        <HStack gap={4} wrap="wrap" hAlign="between" vAlign="center">
          <Text type="supporting">
            {currentYear(site.timeZone)} {site.author.name}. Posts are{' '}
            <Link href={LICENSE_URL}>CC BY 4.0</Link>, code is{' '}
            <Link href={LICENSE_URL}>MIT</Link>.
          </Text>
          <Link href={site.repository} isStandalone>
            Source on GitHub
          </Link>
        </HStack>
      </PageLayout>
    </LayoutFooter>
  );
}
