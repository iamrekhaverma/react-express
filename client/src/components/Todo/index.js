import React from 'react';

class Todo extends React.Component {
  render( ) {
    return (
      <div>
        <input type="text" placeholder="Add a item"/>
        <button> Add item</button>
      </div>
    )
  }
}

export default Todo;
