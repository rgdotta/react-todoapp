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
  }

  updateInput = (input) => {
    this.setState({ name: input });
  };

  updateTask = (task) => {
    const list = [...this.state.tasks, task];
    this.setState({ tasks: list });
  };

  updateCounter = () => {
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
  };

  handleAddTodo = () => {
    if (!this.state.name) {
      alert("Você se esqueceu do nome da lista!");
    } else {
      this.props.addTodo(this.state.name, this.state.tasks);
    }
    this.setState({ name: "", tasks: [], taskCounter: [] });
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder="Nome da Lista"
        />
        <button onClick={() => this.updateCounter()}>+</button>
        {this.state.taskCounter.map((input, index) => {
          return (
            <AddTaskInput key={index} id={index} update={this.updateTask} />
          );
        })}
        <button className="add-todo" onClick={this.handleAddTodo}>
          Criar
        </button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
// export default AddTodo;
