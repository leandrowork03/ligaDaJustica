'use client'

import { Hero } from "@/app/types/hero";
import { useEffect,useState } from "react";

export function Names(){
     const [heroes, setHeroes] = useState<Hero[]>([])
    
      useEffect(() => {
        fetch('/api/heroes')
          .then(res => res.json())
          .then(data => setHeroes(data))
          .catch(console.error)
      }, [])
    return(
        
<div className="flex flex-col sm:flex-row w-full font-black flex-wrap gap-2">
  {heroes.map((hero) => (
    <div key={hero.id} className="max-w-7xl mx-auto">
      <h1>{hero.nome}</h1>
    </div>
  ))}
</div>


        
    )
}