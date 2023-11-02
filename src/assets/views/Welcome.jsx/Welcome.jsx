import React, { useEffect, useState } from "react";
import { handleTheme } from "../../../service/handleTheme";
import Button from "../../components/button/Button";

import "./welcome.scss";
import { HandleLS } from "../../../service/handleLocalStorage";
import { Link } from "react-router-dom";

const Welcome = () => {
  //Atualiza o Tema
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (handleTheme.detectTheme == "dark") {
      setTheme(handleTheme.detectTheme);
    } else {
      setTheme(handleTheme.detectTheme);
    }
  }, []);
  //passa o tema pro pai
  

  //Nome do usuário
  const [userName, setUserName] = useState("");

  useEffect(() => {
    console.log(userName);
    if (HandleLS.getInfoLS("name") != "") {
      setUserName(HandleLS.getInfoLS("name"));
    }

    if (HandleLS.getInfoLS("name") == null) {
      HandleLS.setInfoLS("name", userName);
    }
  }, [userName]);

  return userName === "" ? (
    <div className={`welcome__container ${theme}__container`}>
      <h1>Olá, seja bem vindo {userName == "" ? "Novato" : userName}</h1>
      <h2>Escolha o seu nome de aventureiro e siga a diante </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let inputValue = e.target[0].value;
          setUserName(inputValue);
        }}
      >
        <input
          type="text"
          placeholder="Digite seu nome aqui"
          className={`${theme}-input`}
        />
        <Button theme={theme}>Texto</Button>
      </form>
    </div>
  ) : (
    <div className={`welcome__container ${theme}__container`}>
      <h1>
        Olá, <span>{userName}</span>
        <br />
        Seu nome já foi definido
      </h1>
      <p>Aperte no botão abaixo para seguir com as suas tarefas</p>
      <Link to={"/home"}>Ver minhas tarefas</Link>
    </div>
  );
};

export default Welcome;
