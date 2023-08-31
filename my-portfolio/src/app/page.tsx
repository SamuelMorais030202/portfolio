import { Experience } from "./components/Experience/Exprience";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Information/Information";
import { SocialBtns } from "./components/SocialBtns/socialBtns";

import { FaWhatsapp } from 'react-icons/fa';

import './styles/home.scss';

export default function Home() {
  const phoneNumber = '+5538988449448';

  return (
   <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <a
          className="btn-primary"
          href={`https://wa.me/${phoneNumber}`}
          target="_blank" rel="noopener noreferrer"
        >
          Contact me <FaWhatsapp />
        </a>
      </div>
   </main>
  )
}
