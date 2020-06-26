import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import AddTaskInput from "./AddTaskInput";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tasks: [],
      taskCounter: [],
    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput = (input) => {
    this.setState({ name: input });
  };

  updateTask = (task) => {
    const list = [...this.state.tasks, task];
    this.setState({ tasks: list });
  };

  updateCounter = (e) => {
    const count = this.state.taskCounter;
    var newCount;

    if (!count) {
      newCount = 0;
    } else {
      newCount = count[count.length - 1] + 1;
    }
    console.log(newCount);

    const list = [...count, newCount];
    this.setState({ taskCounter: list });

    e.preventDefault();
  };

  handleAddTodo = (e) => {
    if (!this.state.name) {
      alert("Você se esqueceu do nome da lista!");
    } else {
      this.props.addTodo(this.state.name, this.state.tasks);
    }

    this.setState({ name: "", tasks: [], taskCounter: [] });

    e.preventDefault();
    return false;
  };

  render() {
    return (
      <form>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.name}
          placeholder="Nome da Lista"
        />
        <button onClick={this.updateCounter.bind(this)}>+</button>
        {this.state.taskCounter.map((input, index) => {
          return (
            <AddTaskInput
              key={index}
              id={index}
              update={this.updateTask.bind(this)}
            />
          );
        })}
        <button
          type="submit"
          className="add-todo"
          onClick={this.handleAddTodo.bind(this)}
        >
          Criar
        </button>
      </form>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
// export default AddTodo;
