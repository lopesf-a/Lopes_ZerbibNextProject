'use client';

import BlockError from '@/components/blocks/block-error';

export default function TodosError({ error, reset }: { error: Error; reset: () => void }) {
  return <BlockError title="Todos indisponibles" error={error} reset={reset} />;
}
