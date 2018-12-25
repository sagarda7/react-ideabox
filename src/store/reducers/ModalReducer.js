import ActionTypes from '../Actiontypes'
export const createModalReducer = (state={show:false}, action) => {
    switch(action.type) {
      case ActionTypes.ACTION_HANDLE_CREATE_IDEA_MODAL:
        return Object.assign({}, state, {
            show: action.payload
        })
      default: 
        return state
    }
  }