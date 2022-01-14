import * as actionTypes from './action-types'

export const rootReducer = (state, action) => {
  console.log(action)

  switch(action.type){
    case actionTypes.CHANGE_MESSAGE_FC:
      return {
        ...state,
        test: 'Message changed in fucntion component'
      }
    case actionTypes.CHANGE_MESSAGE_BY_PARAM_FC:
      return {
        ...state,
        test: action.payload
      }
    default:
      return state
  }
}