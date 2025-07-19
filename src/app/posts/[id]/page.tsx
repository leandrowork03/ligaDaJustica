import { PostInfo } from "./components/post";

export default function DetailPost({ params }: { params: { id: string } }) {
  return (
    <main>
      <PostInfo id={params.id} />
    </main>
  );
}
