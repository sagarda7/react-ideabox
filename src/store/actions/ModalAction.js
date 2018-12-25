import ActionTypes from '../Actiontypes'
export const handleCreateIdeaModalAction = (show) => {
    return {
        type: ActionTypes.ACTION_HANDLE_CREATE_IDEA_MODAL,
        payload: show
    }
}

