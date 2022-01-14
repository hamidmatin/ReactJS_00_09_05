import * as actionTypes from './action-types';

export const changeTestAction = () => {
  return { type: actionTypes.CHANGE_TEST };
};

export const changeMessageAction = () => {
  return { type: actionTypes.CHANGE_MESSAGE, payload: 'new message' };
};

export const changeMessageByParamAction = (message)=>{
  return {type: actionTypes.CHANGE_MESSAGE, payload: message}
}

export const userAddToListAction = (user)=>{
  return {type: actionTypes.USER_ADD_TO_LIST, payload: user}
}