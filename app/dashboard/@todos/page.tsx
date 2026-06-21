import { Suspense } from 'react';
import TodosBlock from '@/components/blocks/todos-block';
import TodosSkeleton from '@/components/skeletons/todos-skeleton';

export default function TodosSlot() {
  return (
    <Suspense fallback={<TodosSkeleton />}>
      <TodosBlock />
    </Suspense>
  );
}
