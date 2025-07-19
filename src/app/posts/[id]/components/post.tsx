import { heroes } from '@/data/heroes';

export function PostInfo({ id }: { id: string }) {
  const hero = heroes.find(h => h.id === Number(id));

  return (
    <main className="max-w-6xl mx-auto pt-16 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 transition-all duration-500">
        {/* Imagem e identidade secreta */}
        <div className="text-center md:text-left">
          <img
            src={hero?.image.img2}
            alt={hero?.nome}
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-md mx-auto md:mx-0 border-4 border-zinc-200 dark:border-zinc-700"
          />
          <h2 className="text-2xl md:text-3xl font-[var(--font-monoton)] mt-4 text-zinc-700 dark:text-zinc-200 tracking-wide">
            {hero?.identidade}
          </h2>
        </div>

        {/* Nome público e poderes */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight">
            {hero?.nome}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
            {hero?.poderes}
          </p>
        </div>
      </div>
    </main>
  );
}
