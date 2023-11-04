import React, { useEffect, useState } from "react";
import { HandleLS } from "../../../service/handleLocalStorage";
import { handleTheme } from "../../../service/handleTheme";
import { Link, useParams } from "react-router-dom";
import "./tarefa.scss";
import Header from "../../components/header/Header";

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
  const [toDo, setToDo] = useState({});

  const toDoList = HandleLS.getInfoLS("storedToDoList");

  useEffect(() => {
    setToDo(HandleLS.getToDoInfo(taskId));
  }, []);

  useEffect(() => {
    console.log(toDo);
  }, [toDo]);

  return (
    <div className={`container-${theme} task-container`}>
      <Header />
      <Link className="LinkVoltar" to={"/home"}>Voltar</Link>

      
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const newToDoList = toDoList;

          newToDoList[taskId] = toDo;

          console.log(newToDoList);
          HandleLS.setInfoLS("storedToDoList", newToDoList);
        }}
      >
        <h2>Clique na informação para editá-la: <br/><br/></h2>
        <label htmlFor="title" className="contentEditable">
          Título:{" "}
          <input
            type="text"
            id="title"
            maxLength={15}
            value={toDo.title}
            onChange={(e) => {
              let task = toDoList[taskId];

              e.target.value;

              task.title = e.target.value;

              setToDo(task);
            }}
          />
        </label>

        <label htmlFor="description" className="contentEditable">
          Descrição:{" "}
          <input
            type="text"
            id="description"
            maxLength={50}
            value={toDo.description}
            onChange={(e) => {
              let task = toDoList[taskId];

              e.target.value;

              task.description = e.target.value;

              setToDo(task);
            }}
          />
        </label>

        <label htmlFor="date" className="contentEditable">
          Data:{" "}
          <input
            type="text"
            id="date"
            placeholder="dd/mm"
            value={toDo.date}
            onChange={(e) => {
              let task = toDoList[taskId];

              e.target.value;

              task.date = e.target.value;

              setToDo(task);
            }}
          />
        </label>

        <button>Salvar</button>
      </form>
      <label htmlFor=""></label>
    </div>
  );
};

export default Tarefa;
