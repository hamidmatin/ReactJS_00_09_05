import React, { Component } from 'react';
import { BasePage } from '../components/base-page';
import { ClassComponent, ClassComponentWithState } from '../react-component/class-component';
import ClassComponentLifecycle from '../react-component/class-component-lifecycle';

export class UseClassComponentPage extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: false,
      message: 'React class component lifecycle'
    };
  }

  render() {
    return (
      <BasePage title='Use Class Component'>
        {/* <ClassComponent /> */}
        {/* <ClassComponent sessionNumber={4} message='Hello react class component' /> */}
        {/* <ClassComponent sessionNumber={4} message='Hello react class component'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, totam facilis quasi
          autem ipsa ab labore soluta, unde magni aliquam sit architecto minus possimus quod
          repellendus earum delectus. Harum, repellat!
        </p>
      </ClassComponent> */}
        {/* <hr /> */}
        <ClassComponentWithState />
        <hr />
        <button
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        >
          Toggle Show
        </button>
        <button onClick={()=>{
          this.setState({message: this.state.message + ', Message Changed'})
        }}>Change Message</button>
        {this.state.isVisible && (
          <ClassComponentLifecycle message={this.state.message} />
        )}
      </BasePage>
    );
  }
}
