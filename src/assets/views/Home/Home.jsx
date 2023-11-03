import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";

import "./home.scss";
import Lista from "../../components/lista/Lista";
import { Outlet } from "react-router-dom";
import { handleTheme } from "../../../service/handleTheme";

const home = ({ data}) => {
  //Atualiza o Tema
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (handleTheme.detectTheme() == "dark") {
      setTheme(handleTheme.detectTheme());
    } else {
      setTheme(handleTheme.detectTheme());
    }
  }, [theme]);

  return (
    <div className={`home-container ${theme}`}>
      <Header />      
      <main className="home_content-container">
        <h1>Tarefas de Hoje</h1>

        <Lista data={data} />
      </main>
    </div>
  );
};

export default home;
