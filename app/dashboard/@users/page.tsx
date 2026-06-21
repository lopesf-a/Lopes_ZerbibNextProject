import { Suspense } from 'react';
import UsersBlock from '@/components/blocks/users-block';
import UsersSkeleton from '@/components/skeletons/users-skeleton';

export default function UsersSlot() {
  return (
    <Suspense fallback={<UsersSkeleton />}>
      <UsersBlock />
    </Suspense>
  );
}
