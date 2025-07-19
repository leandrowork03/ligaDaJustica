"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import lj from "../../../../public/jdl.png";
import jl from "../../../../public/jl.png";
import { heroes } from "@/data/heroes";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="bg-blue-500 py-3 shadow-md relative z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo da esquerda */}
        <Link href="/">
          <img src={lj.src} alt="logo" className="w-16 h-12 cursor-pointer" />
        </Link>

        <div className="relative" ref={menuRef}>
          <img
            src={jl.src}
            alt="menu icon"
            className="w-14 h-14 cursor-pointer rounded-full border-2 border-white bg-black pulse-glow"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {menuOpen && (
            <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-lg overflow-hidden w-56 dark:bg-zinc-800">
              <ul className="flex flex-col divide-y divide-gray-200 dark:divide-zinc-700">
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-3 hover:bg-blue-100 dark:hover:bg-zinc-700 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                {heroes.map((hero) => (
                  <li key={hero.id}>
                    <Link
                      href={`/posts/${hero.id}`}
                      className="block px-4 py-3 hover:bg-blue-100 dark:hover:bg-zinc-700 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      {hero.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

