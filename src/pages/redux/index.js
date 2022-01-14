import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BasePage } from '../../components/base-page';
import {
  changeMessageAction,
  changeMessageByParamAction,
  changeTestAction,
} from '../../redux/actions';

export const ReduxPageIndex = () => {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // console.log(state);

  // const test = useSelector((state) => state.reduxTest);
  // const message = useSelector((state) => state.message);

  const { reduxTest: test, message } = useSelector((state) => state);

  const [newMssage, setNewMessage] = useState('');

  return (
    <BasePage title={`Redux`}>
      <h2>{test}</h2>
      <p>{message}</p>
      <input
        type='text'
        value={newMssage}
        onChange={(e) => {
          setNewMessage(e.target.value);
        }}
      />
      <hr />
      <button
        onClick={() => {
          dispatch(changeTestAction());
        }}
      >
        Change Test
      </button>

      <button
        onClick={() => {
          dispatch(changeMessageAction());
        }}
      >
        Change Message
      </button>
      <button
        onClick={() => {
          dispatch(changeMessageByParamAction(newMssage));
        }}
      >
        Change Message by input
      </button>
    </BasePage>
  );
};
