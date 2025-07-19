import { PostInfo } from "./components/post";

type PageProps = {
  params: {
    id: string;
  };
};

export default function DetailPost({ params }: PageProps) {
  return (
    <main>
      <PostInfo id={params.id} />
    </main>
  );
}
