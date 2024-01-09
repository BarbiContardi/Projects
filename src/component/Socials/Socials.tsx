import { useRef } from "react";
import { socials } from "../../data/data";
import './Socials.scss'

export const Socials = () => {
  const socialsRef = useRef<HTMLHeadingElement>(null);
  return (
    <>
      <p className="perfil">
        Soy una Desarrolladora Full-Stack con la ambición de seguir creciendo en
        el ámbito tecnológico. Mi formación académica y experiencia en diversos
        proyectos me han dotado de habilidades sólidas para diseñar, desarrollar
        y mantener aplicaciones web. Destaco por mi excelente presencia,
        comunicación clara y actitud proactiva para establecer relaciones
        interpersonales sólidas y fluidas. Trabajo eficientemente en equipo y
        poseo una firme disposición al aprendizaje y al crecimiento continuo.
      </p>
      <div className="socials" ref={socialsRef}>
        {socials.map((social) => (
          <a
            href={social.url}
            target="_blank"
            rel="noreferrer"
            key={social.name}
          >
            <img src={social.icon} alt={social.name} />
          </a>
        ))}
      </div>
    </>
  );
};
