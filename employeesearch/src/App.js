import React, { Component } from 'react';
import FriendCard from './components/Card';
import employees from './EmployeeList.json';

class App extends Component {
  state = {
    employees
  };

  removeFriend = id => {
    const employees = this.state.employees.filter(employee => employee.id !== id);
    this.setState({ employees });
  };

  render() {
    return (
      <>
        <h1 className="title">employees List</h1>
        {this.state.employees.map(employee => (
          <FriendCard
            id={employee.id}
            key={employee.name}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
            removeFriend={this.removeFriend}
          />
        ))}
      </>
    );
  }
}

export default App;
