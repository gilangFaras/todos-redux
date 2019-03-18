import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import { duplicateTodo } from '../actions'
import { toggleEdit } from '../actions'
import { editTodo } from '../actions'

const Todo = ({ onChange, completed, text, id, isEdit, dispatch }) => {
  let input
  return(
  <div style={{
    background: '#f5f5f5',
    borderBottom: '1px #ccc dotted',
    padding: "8px 10px",
    margin: "0"
  }}>
    <div>
      <input type="checkbox" onChange={onChange} style={{display: isEdit ? 'none' : 'inline'
        }} />
      <li 
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          display: isEdit ? 'none' : 'inline'
        }}
      >
        <span>{text}</span>
      </li>
      <li
        style={{display: isEdit ? 'inline' : 'none'}}
      >
        <form onSubmit={e => {
          e.preventDefault()
          text = input.value
          dispatch(editTodo(text,id))
          dispatch(toggleEdit(id))
        }}>
          <input type="text" className="field" defaultValue={text} ref={node => input = node} />
          <button type="submit" className="btn-filter">edit</button>
        </form>
      </li>
    </div>
    <div style={{display: isEdit ? 'none' : 'inline'}}>
      <button className="btn"  onClick={e => {
        dispatch(toggleEdit(id))
      }}><i className="material-icons icon">edit</i></button>
      
      <button className="btn" onClick={e => {
        dispatch(duplicateTodo(id))
      }}><i className="material-icons icon">file_copy</i></button>

      <button className="btn" onClick={e => {
        dispatch(deleteTodo(id))
      }}><i className="material-icons icon">delete</i></button>
    </div>
  </div>
)
}

Todo.propTypes = {
  onChange: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired
}

export default connect()(Todo)
