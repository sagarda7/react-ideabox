import ActionTypes from '../Actiontypes'
let initialState = []
export const ideaReducer = (state=initialState, action) => {
    switch(action.type) {
      case ActionTypes.ACTION_CREATE_IDEA:
        return [...state, action.payload]
      case ActionTypes.ACTION_DELETE_IDEA:
        let newState = [...state];
        newState.splice(action.payload, 1);
        return newState;
      default: 
        return state
    }
  }