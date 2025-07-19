import FancySlider from "./components/slider";
import { Names } from "./components/names";
import { Metadata } from "next";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: 'Projeto Liga da Justiça',
  description: 'Projeto Next JS para portfólio',
  openGraph: {
    title: 'Projeto Liga da Justiça',
    description: 'Projeto Next JS para portfólio',
    images: [
      'https://tse3.mm.bing.net/th/id/OIP.N7X4pbc2pF4bPh9embX2QAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
    },
  },
}

export default function Home() {
  return (
    <>
      <FancySlider />
      <Names />
      <Footer />
    </>
  );
}
