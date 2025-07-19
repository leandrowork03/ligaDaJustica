import { Metadata } from 'next'
import { PostInfo } from './components/post';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: `Post ${params.id}`,
  }
}

export default async function DetailPost({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <PostInfo id={id} />
    </div>
  );
}