import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../../redux/actions";
import createIcon from "../../css/images/botao_adicionar.png";
import { Button } from "@material-ui/core";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tasks: [{ id: 0, name: "" }],
      taskCounter: [0],
    };
    this.updateInput = this.updateInput.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
  }

  updateInput = (input) => {
    this.setState({ name: input });
  };

  updateTask = (task, id) => {
    let loop = true;

    const list = [...this.state.tasks];

    if (this.state.tasks.length > 0) {
      list.forEach((existingTask) => {
        //verifica se a tarefa do input já existe para atualiza-la no estado local antes de jogar para o store do redux
        if (existingTask.id === id) {
          list.splice(existingTask.id, 1, { id: id, name: task });
          this.setState({ tasks: list });

          loop = false;
        } else if (existingTask.id !== id && loop === true) {
          this.setState({
            tasks: [...this.state.tasks, { id: id, name: task }],
          });
        }
      });
    } else {
      this.setState({
        tasks: [{ id: id, name: task }],
      });
    }
  };

  updateCounter = (e) => {
    const count = this.state.taskCounter;
    const newCount = count[count.length - 1] + 1;

    const list = [...count, newCount];
    this.setState({
      taskCounter: list,
      tasks: [...this.state.tasks, { id: newCount, name: "" }],
    });

    e.preventDefault();
  };

  handleAddTodo = (e) => {
    if (!this.state.name) {
      alert("Você se esqueceu do nome da lista!");
    } else {
      this.props.addTodo(this.state.name, this.state.tasks);
      this.setState({
        name: "",
        tasks: [{ id: 0, name: "" }],
        taskCounter: [0],
      });
    }

    e.preventDefault();
    return false;
  };

  render() {
    return (
      <div>
        <h1 className="createTitle">Criar Lista</h1>
        <form>
          <input
            className="defaultInput createInput"
            onChange={(e) => this.updateInput(e.target.value)}
            value={this.state.name}
            placeholder="Digite o nome da lista..."
          />
          {this.state.taskCounter.map((input, index) => {
            return (
              <div className="flex" key={index}>
                <input
                  className="defaultInput createInput"
                  onChange={(e) => {
                    this.updateTask(e.target.value, index);
                  }}
                  type="text"
                  placeholder="Adicionar tarefa"
                  value={this.state.tasks[index].name}
                />
                {index === this.state.taskCounter.length - 1 && (
                  <button
                    className="submitBtn noStyleBtn addTaskBtn"
                    onClick={(e) => this.updateCounter(e)}
                  >
                    <img src={createIcon} alt="Add tarefa" />
                  </button>
                )}
              </div>
            );
          })}
          <div className="flex addTodoBtnContainer">
            <div className="cancelTodoDiv">
              <Button className="greenBtn" onClick={this.props.cancel}>
                Cancelar
              </Button>
            </div>
            <div className="addTodoDiv">
              <Button
                type="submit"
                className="orangeBtn"
                onClick={this.handleAddTodo.bind(this)}
              >
                Criar
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
