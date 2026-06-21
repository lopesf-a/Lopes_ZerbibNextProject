import { Suspense } from 'react';
import PostsBlock from '@/components/blocks/posts-block';
import PostsSkeleton from '@/components/skeletons/posts-skeleton';

export default function PostsSlot() {
  return (
    <Suspense fallback={<PostsSkeleton />}>
      <PostsBlock />
    </Suspense>
  );
}
