// src/types/hero.ts

export interface Hero {
  id: number;
  nome: string;
  image: {
    img1: string;
    img2: string;
  };
}

// 👇 Adiciona essa tipagem no mesmo arquivo
export type PostPageProps = {
  params: {
    id: string;
  };
};

