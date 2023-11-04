import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./assets/views/Home/Home";
import LISTA_DE_TAREFAS from "./mock/bd.mock";
import Welcome from "./assets/views/Welcome.jsx/Welcome";
import { handleTheme } from "./service/handleTheme";
import Tarefa from "./assets/views/Tarefa/Tarefa";

function App() {
  //Atualiza o Tema
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (handleTheme.detectTheme == "dark") {
      setTheme(handleTheme.detectTheme);
    } else {
      setTheme(handleTheme.detectTheme);
    }
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome detectTheme={theme} />} />
        <Route path="/home" element={<Home theme={theme}  data={LISTA_DE_TAREFAS} />} />
        <Route path="/tarefas/:taskId" element={<Tarefa />} />
      </Routes>
    </div>
  );
}

export default App;
