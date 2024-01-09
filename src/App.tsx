import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./App.css";
import { Card } from "./component/Cards/Card";
import { Socials } from "./component/Socials/Socials";
import { Contact } from "./component/Contact/Contact";
import Button from "./component/Button/Button";
import { Cv } from "./component/Cv/Cv";
import perfil from "./assets/fotoperfil.jpg";

const App: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const subTitleRef = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState<string | null>(null);
  const controls = useAnimation();

  const handleClick = (component: string) => {
    setVisible(component);
  };

  useEffect(() => {
    controls.start("visible");

    return () => controls.stop();
  }, [controls]);

  return (
    <div className="App">
      <motion.h1
        ref={titleRef}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: {
            y: 2,
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" },
          },
        }}
      >
        Bárbara Contardi
      </motion.h1>
      <motion.img
        ref={imgRef}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { x: -500, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" },
          },
        }}
        src={perfil}
        alt="fotoperfil"
        className="foto"
      />
      <motion.h2
        ref={subTitleRef}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: {
            y: 2,
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" },
          },
        }}
      >
        Junior Full-Stack Web Developer
      </motion.h2>
      <div className="section">
        <div className="container">
          <Button
            isPrimary={true}
            onClick={() => handleClick("Perfil")}
            texto={"Perfil"}
          />
          <Button
            isPrimary={true}
            onClick={() => handleClick("Proyectos")}
            texto={"Proyectos"}
          />
          <Button
            isPrimary={true}
            onClick={() => handleClick("Contacto")}
            texto={"Contacto"}
          />
          <Button
            isPrimary={true}
            onClick={() => handleClick("CV")}
            texto={"CV"}
          />
        </div>
        {visible === "Perfil" && <Socials />}
        {visible === "Proyectos" && <Card />}
        {visible === "Contacto" && <Contact />}
        {visible === "CV" && <Cv />}
      </div>
    </div>
  );
};

export default App;
