const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          isEdit: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed : !todo.completed}
          : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo =>
        todo.id !== action.id)

    case 'DUPLICATE_TODO':
    const todo = state.find(todo => (todo.id === action.id))  
    if (state.length === 1){
    return [
        ...state,
        {          
          id: action.nextid,
          text: todo.text,
          completed: todo.completed,
          isEdit: todo.isEdit 
        }
      ]
    } else {
      let cnt = 0
      const firstHalf = state.slice(0, todo.id)
      const secondhalf = state.slice(todo.id)
      const temp = [...firstHalf, todo, ...secondhalf]
      return temp.map(todos =>
        ({
          ...todos, id: cnt++ 
        }))
    }

    case 'EDIT_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, text : action.text}
          : todo
      )
    
    case 'TOOGLE_EDIT':
      return state.map(todo =>
        (todo.id === action.id) ? (todo.completed ? todo : {...todo, isEdit : !todo.isEdit}) : todo
      )
      
    default:
      return state
  }
}

export default todos
