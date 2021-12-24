import React from 'react'
import { BasePage } from '../components/base-page'
import { FunctionComponent1, FunctionComponent2 } from '../react-component/function-component'

export const UseFunctionComponentPage = () => {
  return (
    <BasePage title='Use Function Component'>
      <FunctionComponent1 />
      <FunctionComponent1 />
      <hr />
      <FunctionComponent2 message='Hello React' sessionNumber='3' />
      <FunctionComponent2
        message='Hello React'
        sessionNumber='3'
        style={{ backgroundColor: 'hotpink', color: 'white' }}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, totam facilis quasi
          autem ipsa ab labore soluta, unde magni aliquam sit architecto minus possimus quod
          repellendus earum delectus. Harum, repellat!
        </p>
      </FunctionComponent2>
      <FunctionComponent2 message='skdsjgdj' sessionNumber={3}>
        <h3>kjsdgkdsg</h3>
      </FunctionComponent2>
    </BasePage>
  )
}
