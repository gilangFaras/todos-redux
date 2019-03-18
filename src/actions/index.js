let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const duplicateTodo = id => ({
  type: 'DUPLICATE_TODO',
  nextid: nextTodoId++,
  id
})

export const toggleEdit = id => ({
  type: 'TOOGLE_EDIT',
  id
})

export const editTodo = (text, id) => ({
  type: 'EDIT_TODO',
  text, id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
