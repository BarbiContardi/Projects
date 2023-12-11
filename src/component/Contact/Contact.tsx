import { useRef } from "react";
import { contact } from '../../data/data';

export const Contact = () => {
    const contactRef = useRef<HTMLHeadingElement>(null);
  return (
    <div className="contact" ref={contactRef}>
        {contact.map((item) => (
          <div className="item" key={item.name}>
            <img src={item.icon} alt={item.name} />
            <p>{item.value}</p>
          </div>
        ))}
      </div>
  );
};