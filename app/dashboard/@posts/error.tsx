'use client';

import BlockError from '@/components/blocks/block-error';

export default function PostsError({ error, reset }: { error: Error; reset: () => void }) {
  return <BlockError title="Posts indisponibles" error={error} reset={reset} />;
}
