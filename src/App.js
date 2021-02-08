import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

const listItems = [
  { 
    task: 'Eat Food',
    id: 100,
    completed: false,
  },
  {
    task: 'Take Nap',
    id: 101,
    completed: false,
  },
  {
    task: 'Work Out',
    id: 102,
    completed: false,
  },
  {
    task: 'Read',
    id: 103,
    completed: false,
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {
      listItems: listItems
    }
  }

  toggle = (itemId) => {
    this.setState({
      listItems: this.state.listItems.map((item) => {
        if (itemId === item.id) {
          return ({
            ...item,
            completed: !item.completed
          });
        } else {
          return(item);
        }
      })
    })
  }

  addItem = (itemName) => {
    const item = {
      task: itemName,
      id: Date.now(),
      completed: false,
    };

    const newItem = [...this.state.listItems, item];

    this.setState({
      listItems: newItem,
    });
  };

  completedItem = () => {
    this.setState({
      listItems: this.state.listItems.filter(item => (!item.completed))
    })
  }
  
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoForm addItem={this.addItem} />
        <TodoList completedItem={this.completedItem} listItems={this.state.listItems} toggle={this.toggle} />
      </div>
    );
  }
}

export default App;
