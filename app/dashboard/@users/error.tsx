'use client';

import BlockError from '@/components/blocks/block-error';

export default function UsersError({ error, reset }: { error: Error; reset: () => void }) {
  return <BlockError title="Utilisateurs indisponibles" error={error} reset={reset} />;
}
