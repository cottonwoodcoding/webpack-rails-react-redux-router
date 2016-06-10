export const addTodo = (name) => {
  return(dispatch) => {
    $.ajax({
      url: '/api/items',
      type: 'POST',
      data: { item: { name }},
      dataType: 'JSON'
    }).done( item => {
      dispatch({
        type: 'ADD_TODO',
        item
      })
    })
  }
}

export const getTodos = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/items',
      type: 'GET',
      dataType: 'JSON'
    }).done( todos => {
      dispatch({
        type: 'TODOS',
        todos
      })
    })
  }
}

export const deleteTodo = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/items/${id}`,
      type: 'DELETE'
    }).done( () => {
      dispatch({
        type: 'DELETE_TODO',
        id
      })
    })
  }
}

export const updateTodo = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/items/${id}`,
      type: 'PUT'
    }).done( item => {
      dispatch({
        type: 'UPDATE_TODO',
        item
      })
    })
  }
}
