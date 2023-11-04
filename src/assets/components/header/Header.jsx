import React, { useEffect, useState } from "react";
import "./header.scss";
import { FaListCheck } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { handleTheme } from "../../../service/handleTheme";
import { HandleLS } from "../../../service/handleLocalStorage";

const Header = () => {
  //Atualiza o Tema
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (handleTheme.detectTheme() == "dark") {
      setTheme(handleTheme.detectTheme());
    } else {
      setTheme(handleTheme.detectTheme());
    }
  }, [theme]);

  //header swipe
  const [popFlag, setPopFlag] = useState(false);

  const userName = HandleLS.getInfoLS("name");

  return (
    <div className={`${theme} header_container show-${popFlag}`}>
      <div onClick={() => setPopFlag(!popFlag)} className="icoContainer">
        {popFlag ? <AiOutlineClose /> : <FaGreaterThan />}
      </div>
      <aside className={`show-${popFlag}`}>
        <header>
          <FaListCheck />

          <div className="active">
            <p>
              Tarefas de
              <span className="username">{userName}</span>
            </p>
          </div>
          <div></div>
          <div className="options">
            <p>Ver Tarefas</p>
            <p>* Opção 1</p>
            <p>* Opção 2</p>
            <p>* Apenas para teste</p>

            <p></p>
          </div>          
        </header>
      </aside>
    </div>
  );
};

export default Header;
