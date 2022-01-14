import * as actionTypes from './action-types';

export const changeMessageAction_context = () => {
  return { type: actionTypes.CHANGE_MESSAGE_FC };
};

export const changeMessageByParamAction_context = (message) => {
  return { type: actionTypes.CHANGE_MESSAGE_BY_PARAM_FC, payload: message };
};
