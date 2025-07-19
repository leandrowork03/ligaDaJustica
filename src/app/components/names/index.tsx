"use client";

import { Hero } from "@/app/types/hero";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Names() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    fetch("/api/heroes")
      .then((res) => res.json())
      .then((data) => setHeroes(data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row w-full font-black flex-wrap gap-2 pt-3">
      {heroes.map((hero) => (
        <div key={hero.id} className="max-w-7xl mx-auto">
          <Link
            href={`/posts/${hero.id}`}
            className="hover:border-b-3 hover:border-blue-600"
          >
            {hero.nome}
          </Link>
        </div>
      ))}
    </div>
  );
}

