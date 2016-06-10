const items = (state = [], action) => {
  switch (action.type) {
    case 'TODOS':
      return action.todos;
    case 'ADD_TODO':
      return [
        { ...action.item },
        ...state
      ]
    case 'UPDATE_TODO':
      let index = state.findIndex( i => i.id === action.item.id );
      return [
        ...state.slice(0, index ),
        { ...action.item },
        ...state.slice(index + 1, state.length)
      ]
    case 'DELETE_TODO':
      let deleteIndex = state.findIndex( i => i.id === action.id )
      return [
        ...state.slice(0, deleteIndex),
        ...state.slice(deleteIndex + 1, state.length)
      ]
    default:
      return state;
  }
}

export default items;
