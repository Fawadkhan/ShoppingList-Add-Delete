// App.js
import React, { Component } from "react";
import "./App.css";
import AddItem from "./Additem";
import Itemlist from "./Itemlist";
import DeleteItem from "./DeleteItems";

class App extends Component {
  state = {
    items: []
  };

  addItem = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 2 - Controlled Components</p>
        </header>
        <main className="App-main">
          <AddItem onAddItem={this.addItem} />
          <DeleteItem
            onDeleteLastItem={this.deleteLastItem}
            onNoItemsFound={this.noItemsFound()}
          />
          <Itemlist items={this.state.items} />
        </main>
      </div>
    );
  }
}

export default App;
