import React, { useState, useEffect } from 'react';

export const HookSample = ({ message }) => {
  /**
   * Styles
   */
  const style = {
    textAlign: 'center',
    padding: '8px 16px',
  };

  const messageStyle = {
    ...style,
    color: 'orangered',
  };
  const paragStyle = {
    ...style,
    color: 'green',
  };

  /**
   * States
   */
  const [counter, setCounter] = useState(0);
  const [description, setDescription] = useState('My Description');

  /**
   * EventHandlers
   */

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  /**
   * useEffect
   */

  // console.log(useEffect);

  /*
    useEffect(callback function, dependencies)


    useEffect(() => {

      mounting and after updating

      return () => {
        before updateing and unmounting
      }
    }, [states])
  */

  /* sample 1 */
  // useEffect(() => {
  //   console.log('1. Mount and After Update for any state');
  //   return () => {
  //     console.log('1-1. Unmount and Before Update any state');
  //   };
  // });

  /* sample 2 */
  // useEffect(() => {
  //   console.log('2. Mount and After Update depend on counter');
  //   return () => {
  //     console.log('2-1. Unmount and Before Update counter');
  //   };
  // }, [counter]);


  /* sample 3 */
  // useEffect(() => {
  //   console.log('3. Mount and After Update depend on description');
  //   return () => {
  //     console.log('3-1. Unmount and Before Update description');
  //   };
  // }, [description]);

  /* sample 4 */
  // useEffect(() => {
  //   console.log('4. Mount and After Update depend on description or counter');
  //   return () => {
  //     console.log('4-1. Unmount and Before Update description or counter');
  //   };
  // }, [description, counter]);

  /* sample 4 */
  useEffect(() => {
    console.log('5. Mount');
    return () => {
      console.log('5-1. Unmount');
    };
  }, []);

  /**
   * Render component
   */
  return (
    <div>
      <h3 style={messageStyle}>{message}</h3>

      <div style={style}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <br />
        <button
          onClick={() => {
            setDescription(`${description}, add some desc`);
          }}
        >
          Add Descripioon
        </button>
      </div>
      <p style={paragStyle}>
        Counter : <b>{counter}</b>
      </p>
      <p style={paragStyle}>
        Description : <b>{description}</b>
      </p>
    </div>
  );
};
