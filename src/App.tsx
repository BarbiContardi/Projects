import React, { useRef, useState } from 'react';
import './App.css';
import { Card } from './component/Cards/Card';
import { Socials } from './component/Socials/Socials';
import { Contact } from './component/Contact/Contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Importa ScrollTrigger
import Button from './component/Button/Button';
import { Cv } from './component/Cv/Cv';

gsap.registerPlugin(ScrollTrigger); // Registra el plugin ScrollTrigger

const App: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState<string | null>(null);

  const handleClick = (component: string) => {
    setVisible(component);
  };
  gsap.from(titleRef.current, {
    duration: 1,
    x: -300,
    stagger: 0.2,
    ease: 'power2',
  });
  return (
    <div className="App">
      <h1 ref={titleRef}>Bárbara Contardi</h1>
      <h2>Junior Full-Stack Web Developer</h2>
      <div className="container">
        <Button isPrimary={true} onClick={() => handleClick("Perfil")} texto={"Perfil"} />
        <Button isPrimary={true} onClick={() => handleClick("Proyectos")} texto={"Proyectos"} />
        <Button isPrimary={true} onClick={() => handleClick("Contacto")} texto={"Contacto"} />
        <Button isPrimary={true} onClick={() => handleClick("CV")} texto={"CV"} />
      </div>
      {visible === "Perfil" && <Socials />}
      {visible === "Proyectos" && <Card />}
      {visible === "Contacto" && <Contact />}
      {visible === "CV" && <Cv />}
    </div>
  );
};

export default App;
