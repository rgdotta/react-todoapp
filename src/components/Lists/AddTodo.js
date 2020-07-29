import React, { useState } from "react";
import { connect } from "react-redux";

import { addTodo } from "../../redux/actions";
import createIcon from "../../css/images/botao_adicionar.png";
import { Button } from "@material-ui/core";

const AddTodo = (props) => {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([{ id: 0, name: "" }]);
  const [taskCounter, setTaskCounter] = useState([0]);

  function updateInput(e) {
    setName(e.target.value);
  }

  function updateTask(task, id) {
    let loop = true;

    const list = [...tasks];

    if (tasks.length > 0) {
      list.forEach((existingTask) => {
        //verifica se a tarefa do input já existe para atualiza-la no estado local antes de jogar para o store do redux
        if (existingTask.id === id) {
          list.splice(existingTask.id, 1, { id: id, name: task });
          setTasks(list);

          loop = false;
        } else if (existingTask.id !== id && loop === true) {
          setTasks([...tasks, { id: id, name: task }]);
        }
      });
    } else {
      setTasks([{ id: id, name: task }]);
    }
  }

  function updateCounter(e) {
    const count = taskCounter;
    const newCount = count[count.length - 1] + 1;

    const list = [...count, newCount];
    setTaskCounter(list);
    setTasks([...tasks, { id: newCount, name: "" }]);

    e.preventDefault();
  }

  function handleAddTodo(e) {
    if (!name) {
      alert("Você se esqueceu do nome da lista!");
    } else {
      props.addTodo(name, tasks);
      setName("");
      setTasks([{ id: 0, name: "" }]);
      setTaskCounter([0]);
    }

    e.preventDefault();
    return false;
  }

  return (
    <div>
      <h1 className="createTitle">Criar Lista</h1>
      <form>
        <input
          className="defaultInput createInput"
          onChange={updateInput}
          value={name}
          placeholder="Digite o nome da lista..."
        />
        {taskCounter.map((input, index) => {
          return (
            <div className="flex" key={index}>
              <input
                className="defaultInput createInput"
                onChange={(e) => {
                  updateTask(e.target.value, index);
                }}
                type="text"
                placeholder="Adicionar tarefa"
                value={tasks[index].name}
              />
              {index === taskCounter.length - 1 && (
                <button
                  className="submitBtn noStyleBtn addTaskBtn"
                  onClick={updateCounter}
                >
                  <img src={createIcon} alt="Add tarefa" />
                </button>
              )}
            </div>
          );
        })}
        <div className="flex addTodoBtnContainer">
          <div className="cancelTodoDiv">
            <Button className="greenBtn" onClick={props.cancel}>
              Cancelar
            </Button>
          </div>
          <div className="addTodoDiv">
            <Button type="submit" className="orangeBtn" onClick={handleAddTodo}>
              Criar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
