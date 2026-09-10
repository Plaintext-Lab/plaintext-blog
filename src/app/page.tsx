import {EmptyState} from '@astryxdesign/core/EmptyState';
import {Heading, Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {PageLayout} from '@/components/PageLayout';
import {site} from '@/config/site';

export default function HomePage() {
  return (
    <PageLayout>
      <VStack gap={8}>
        <VStack gap={3}>
          <Heading level={1}>{site.name}</Heading>
          <Text as="p" type="large">
            Notes on building software with coding agents.
          </Text>
          <Text as="p">
            I describe what I want, hand it to agents like Codex and Claude
            Code, and review what comes back. This site documents the projects
            that come out of that process: the decisions, the dead ends and the
            lessons.
          </Text>
        </VStack>
        <VStack gap={4}>
          <Heading level={2}>Latest posts</Heading>
          <EmptyState
            headingLevel={3}
            isCompact
            title="No posts yet"
            description="New posts appear here as soon as they are published."
          />
        </VStack>
      </VStack>
    </PageLayout>
  );
}
