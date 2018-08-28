import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons:[
        {name: 'Corintho', age: 36},
        {name: 'Valentina', age: 4},
        {name: 'Jô', age: 38}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Foi clicado');
    // DON'T DO THIS: this.state.persons[0].name = 'Fernandes';
    this.setState({
      persons:[
        {name: newName, age: 36},
        {name: 'Valentina', age: 5},
        {name: 'Jô', age: 38}
      ]
    })

  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Corintho', age: 36},
        {name: event.target.value, age: 4},
        {name: 'Jô', age: 38}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, I'm a React App</h1>
        <p>This is really works!!</p>
        <button onClick={() => this.switchNameHandler('Fernandes')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

        <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Fer!')}
          changed={this.nameChangedHandler}>My hobby is dancing</Person>
        
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
