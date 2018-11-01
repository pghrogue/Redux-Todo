import React, { Component } from "react";
import { connect } from 'react-redux';

import Todo from './Todo';

class TodoList extends Component {

  render () {
    return (
      <div className='todoList'>
        {this.props.todos.map( (todo, index) => {
          return (
            <Todo id={index} value={todo.value} completed={todo.completed} />
          );
        })}
      </div>
    );
  }
};

// mapStateToProps so that we have the information needed from the Store
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, {})(TodoList);