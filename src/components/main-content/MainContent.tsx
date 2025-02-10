// MainContent.tsx
import dynamic from 'next/dynamic';
import { Title } from "./Title";
import { Skeleton } from "@/components/ui/skeleton";

const Filter = dynamic(() => import('./Filter'), {
  loading: () => <Skeleton className="h-screen w-full" />,
  ssr: false,
});

export default function MainContent() {
  return (
    <main className="container mx-auto py-8 px-4">
      <Title />
      <Filter />
    </main>
  );
}
