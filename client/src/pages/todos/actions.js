import TODOS_TYPES from "./action-types";

let nextTodoId = 0
export const addTodo = text => ({

  type: TODOS_TYPES.ADD_TODO,
  id: nextTodoId++,
  text
})

export const showTodos = text => ({
  type: TODOS_TYPES.SHOW_TODOS
});

export const deleteTodo = id => ({
  type: TODOS_TYPES.DELETE_TODO,
  id: id
});

