
export default function todos(state = [], action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: action.id
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    case 'DELETE_TODO': 
    return state.filter((todo) => {
      if(todo.id !== action.id) {
        return true;
      }
    })
    default:
      return state
  }
}