import { Suspense } from 'react';
import CommentsBlock from '@/components/blocks/comments-block';
import CommentsSkeleton from '@/components/skeletons/comments-skeleton';

export default function CommentsSlot() {
  return (
    <Suspense fallback={<CommentsSkeleton />}>
      <CommentsBlock />
    </Suspense>
  );
}
