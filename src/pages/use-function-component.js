import React from 'react'
import { BasePage } from '../components/base-page'
import { fadeShow } from '../HOC/fade-show'
import { FunctionComponent1, FunctionComponent2 } from '../react-component/function-component'

const FunctionComponent1Fade = fadeShow(FunctionComponent1)
const FunctionComponent2Fade = fadeShow(FunctionComponent2)

export const UseFunctionComponentPage = () => {
  
  return (
    <BasePage title='Use Function Component'>
      <FunctionComponent1Fade duration={1000} />
      <FunctionComponent1Fade duration={1500} />
      <hr />
      <FunctionComponent2Fade message='Hello React' sessionNumber='3'  duration={2000}/>
      <FunctionComponent2Fade
         duration={2500}
        message='Hello React'
        sessionNumber='3'
        style={{ backgroundColor: 'hotpink', color: 'white' }}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, totam facilis quasi
          autem ipsa ab labore soluta, unde magni aliquam sit architecto minus possimus quod
          repellendus earum delectus. Harum, repellat!
        </p>
      </FunctionComponent2Fade>
      <FunctionComponent2Fade message='skdsjgdj' sessionNumber={3}  duration={3000}>
        <h3>kjsdgkdsg</h3>
      </FunctionComponent2Fade>
    </BasePage>
  )
}
