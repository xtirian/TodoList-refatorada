import React, { useEffect, useState } from "react";
import {handleTheme} from '../../../service/handleTheme'
import "./listform.scss";

import { AiOutlinePlusSquare } from "react-icons/ai";

const ListForm = ({ formHandler, listLength }) => {
   //Atualiza o Tema
   const [theme, setTheme] = useState("");
   useEffect(() => {
     if (handleTheme.detectTheme() == "dark") {
       setTheme(handleTheme.detectTheme());
     } else {
       setTheme(handleTheme.detectTheme());
     }
   }, [theme]);

  const [tarefa, setTarefa] = useState(null);

  //esta função tem por objetivo pegar os dados digitados e criar um objeto. Este objeto será pusheado para dentro da lista todos por meio do método formHandler. Por fim o input será limpo

  const elementCreate = (value) => {
    const newToDo = {
      id: listLength ,
      title: value,
      description: "Adicione uma descrição...",
      completed: false,
      date: "",
      category:[]
    };

    formHandler(newToDo);
    setTarefa(null)
  };

  return (
    <div className={`form_container ${theme}`}>
      <form className="listForm"
        onSubmit={(e) => {          
          elementCreate(tarefa);

          e.target[0].value = "";
          e.preventDefault();

        }}
      >
        <input
          placeholder="Nova tarefa..."
          type="text"
          maxLength={15}
          name="novatarefa"
          onChange={(e) => setTarefa(e.target.value)}
          required
        />
        <button>
          <AiOutlinePlusSquare size={35} />
        </button>
      </form>
    </div>
  );
};

export default ListForm;
