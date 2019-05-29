import React, { Component } from "react";

class AddItem extends Component {
  state = {
    value: ""
  };

  handleChange = value => {
    this.setState({ value });
  };

  inputIsEmpty = () => {
    return this.state.value === "";
  };

  onaddItem = e => {
    e.preventDefault();
    // this.props.onAddItem(e.target.value); // Nope! target is button
    this.props.onAddItem(this.state.value);
  };

  render() {
    console.log(this.state.value);
    return (
      <div className="additems">
        <h2>Shopping List</h2>
        <form onSubmit={this.onaddItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={event => this.handleChange(event.target.value)}
          />
          <button disabled={this.inputIsEmpty}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddItem;
