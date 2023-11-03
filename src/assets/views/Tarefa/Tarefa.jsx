import React, { useEffect, useState } from "react";
import { HandleLS } from "../../../service/handleLocalStorage";
import { handleTheme } from "../../../service/handleTheme";
import { useParams } from "react-router-dom";
import "./tarefa.scss";

const Tarefa = () => {
  //Atualiza o Tema
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (handleTheme.detectTheme() == "dark") {
      setTheme(handleTheme.detectTheme());
    } else {
      setTheme(handleTheme.detectTheme());
    }
  }, [theme]);

  //here i take the id params from url
  const { taskId } = useParams();
  //primeiro, devo puxar as tarefas do local store
  const [toDo, setToDo] = useState(HandleLS.getToDoInfo(taskId));



  const toDoList = HandleLS.getInfoLS("storedToDoList");

  useEffect(() => {
    console.log(toDo)

    toDoList[taskId] = toDo;

    HandleLS.setInfoLS("storedToDoList", toDoList);
  }, [toDo]);

  return (
    <div className={`container-${theme} task-container`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let task = toDo;

          task.title = e.target[0].value;

          setToDo(task);
        }}
      >
        <label className="contentEditable">
          {toDo.title}
          <input type="text" onChange={(e) => (toDo.title = e.target.value)} />
        </label>
      </form>
    </div>
  );
};

export default Tarefa;
