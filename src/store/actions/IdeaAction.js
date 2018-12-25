import ActionTypes from '../Actiontypes'
export const createIdeaAction = (data) => {
    return {
        type: ActionTypes.ACTION_CREATE_IDEA,
        payload: data
    }
}

export const deleteIdeaAction = (index) => {
    return {
        type: ActionTypes.ACTION_DELETE_IDEA,
        payload: index
    }
}

