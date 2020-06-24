import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      create: false,
    };
  }

  handleTask = (input) => {
    this.setState({ task: input });
  };

  submitTask = () => {
    this.props.update({
      id: this.props.id,
      name: this.state.task,
    });
    this.setState({ create: !this.state.create });
    console.log(this.state.create);
  };

  render() {
    return (
      <div>
        {this.state.create ? (
          <p>{this.state.task}</p>
        ) : (
          <div>
            <input
              placeholder="Digite e aperte OK para confirmar"
              onChange={(e) => this.handleTask(e.target.value)}
            />

            <button onClick={() => this.submitTask()}>OK</button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTaskInput);
