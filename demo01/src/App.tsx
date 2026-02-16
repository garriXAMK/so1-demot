import { useState } from "react";
import "./App.css";

function App() {

  const [nimi, setNimi] = useState<string>("");
  const [tervehdys, setTervehdys] = useState<string>("");

  const tervehdi = (): void => {

    setTervehdys(`Heippa maailma, ${nimi} kävi täällä!`);
  };

  return (
    <>
      <h1>Demo 1: React-perusteita</h1>
      <h2>"Hello World!"</h2>

      <input
        type="text"
        placeholder="Kirjoita nimesi..."
        onChange={(e) => {
          setNimi(e.target.value);
        }}
      />

      <button onClick={tervehdi}>Tervehdi</button>

      {Boolean(tervehdys) && <p className={`tervehdys`}>{tervehdys}</p>}
    </>
  );
}

export default App;
