import "./App.css";
import "../src/style/index.scss";
import Button from "./component/Button";
import gsap from "gsap";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(null);
  const handleClick = () => {
    setVisible
      gsap.to(".box1", {
        scrollTrigger: ".box1",
        x: 300,
      });
  };
  return (
    <div className="principal">
      <div className="container" onClick={handleClick}>
        <Button isPrimary={true} onClick={() => {visible}} texto={"Perfil"} />
        <Button isPrimary={true} onClick={() => {visible}} texto={"Proyectos"} />
        <Button isPrimary={true} onClick={() => {visible}} texto={"Contacto"} />
        <Button isPrimary={true} onClick={() => {visible}} texto={"CV"} />
        </div>

        <div className="box1">
          <p>Perfil</p>
        </div>

    </div>
  );
}

export default App;
