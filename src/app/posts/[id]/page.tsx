// src/app/posts/[id]/page.tsx
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: `Post ${params.id}`,
  }
}

export default async function DetailPost({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <h1>Detalhes do post {id}</h1>
    </div>
  );
}
