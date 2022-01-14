import * as actionTypes from './action-types'

const initState = {
  reduxTest: 'Redux Test',
  message: 'Hello React Redux',
  users: []
};

export const rootReducer = (state = initState, action) => {
  console.log('IN Reducer State = ', state);
  console.log('IN Reducer Action = ', action);

  switch (action.type) {
    case actionTypes.CHANGE_TEST:
      return {
        ...state,
        reduxTest: 'Redux Test Changed'
      }
    case actionTypes.CHANGE_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case actionTypes.USER_ADD_TO_LIST:
      const newUsers = [...state.users]
      newUsers.push(action.payload)
      return {
        ...state,
        users: newUsers
      }
    default:
      return state;
  }
};
