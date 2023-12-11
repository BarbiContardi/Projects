import { useRef } from "react";
import { socials } from "../../data/data";

export const Socials = () => {
  const socialsRef = useRef<HTMLHeadingElement>(null);
  return (
    <div className="socials" ref={socialsRef}>
      {socials.map((social) => (
        <a href={social.url} target="_blank" rel="noreferrer" key={social.name}>
          <img src={social.icon} alt={social.name} />
        </a>
      ))}
    </div>
  );
};
