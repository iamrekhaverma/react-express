import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from "./actions";
import { TodosList } from "./todoslist";

class AddTodo extends React.Component {
  state = {
    value: "",
  }
  componentDidMount() {
    fetch('/users')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }
  onSubmit = (event) => {
    const { value } = this.state;
    const { addTodoData } = this.props;
    event.preventDefault()
    if (!value.trim()) {
      return
    }
    addTodoData(value);
  }
  onChange = (event) => {
    this.setState({value: event.target.value})
  }

  onDelete = (id) => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  }

  render( ) {
    const { todos } = this.props || {};
    console.log("todos",this.state)
    return (
      <div>
          <input type="text" placeholder="Add a item" value={this.state.value} onChange={this.onChange}/>
          <button onClick={this.onSubmit}> Add item</button>
          <TodosList data={todos} onDelete={this.onDelete}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => {
  return {
    addTodoData: todoId => dispatch(addTodo(todoId)),
    deleteTodo: todoId => dispatch(deleteTodo(todoId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps ) (AddTodo);
