import React, { useState } from 'react';
import { BasePage } from '../../components/base-page';
import { changeMessageAction_context, changeMessageByParamAction_context } from '../../context/actions';
import { useMyContext } from '../../context/my-context';

export const ContextPageIndex = () => {
  const [newMssage, setNewMessage] = useState('');
  // console.log(useMyContext())

  
  const { myState, dispatch } = useMyContext();

  return (
    <BasePage title={'Context'}>
      <p>Test context : {myState.test}</p>
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
          dispatch(changeMessageAction_context());
        }}
      >
        Change
      </button>

      <button
        onClick={() => {
          dispatch(changeMessageByParamAction_context(newMssage));
        }}
      >
        Change
      </button>
    </BasePage>
  );
};
