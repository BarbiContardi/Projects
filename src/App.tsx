import "./App.css";
import "../src/style/index.scss";
import Button from "./component/Button";


function App() {
  return (
    <>
      <div>
        <p> Este es mi blog</p>
        <Button isPrimary={true} onClick={()=>{}} texto={"Hola"}/>
      </div>
    </>
  );
}

export default App;
