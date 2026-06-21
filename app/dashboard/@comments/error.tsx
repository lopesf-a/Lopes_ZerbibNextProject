'use client';

import BlockError from '@/components/blocks/block-error';

export default function CommentsError({ error, reset }: { error: Error; reset: () => void }) {
  return <BlockError title="Commentaires indisponibles" error={error} reset={reset} />;
}
