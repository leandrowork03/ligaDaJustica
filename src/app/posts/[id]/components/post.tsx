
//rc/app/posts/[id]/Components/post.tsx
import { heroes } from '@/data/heroes';

export function PostInfo({ id }: { id: string }) {
  const hero = heroes.find(h => h.id === Number(id));
  return <div>{hero?.nome}</div>;
}

 


/*<div className="h-screen w-full flex flex-col items-center justify-center gap-4">
        <img src={flash.src} alt="flash" className="w-62 h-62 object-contain" />
        <h1 className="text-2xl font-semibold">Carregando...</h1>
      </div>*/

    