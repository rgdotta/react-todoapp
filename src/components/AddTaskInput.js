import React from "react";

class AddTaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      create: false,
    };
    this.handleTask = this.handleTask.bind(this);
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

            <button onClick={this.submitTask.bind(this)}>OK</button>
          </div>
        )}
      </div>
    );
  }
}

export default AddTaskInput;
