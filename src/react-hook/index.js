import React, { useState } from 'react';
import { BasePage } from '../components/base-page';
import { HookSample } from './hook-sample';

export const HookIndex = () => {
  /**
   * [state, setState()] = useState(init)
   */

  // const test = useState('test')
  // console.log(test)

  // console.log(test[0])
  // console.log(test[1]('New value'))

  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('React Hook Sample');
  
  return (
    <BasePage title='React Hook'>
      
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Toggle Show
      </button>

      <button
        onClick={() => {
          setMessage(message + ', New Message Added');
        }}
      >
        Change message
      </button>

        <button onClick={()=>{console.clear()}}>Clear Console</button>
      <hr />

      {isVisible ? <HookSample message={message} /> : null}
    </BasePage>
  );
};
