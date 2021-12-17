import React, { Component } from 'react';
import './class-component.css'

export class ClassComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>React Class Component</h2>
        <h3>{this.props.message}</h3>
        <p>Session : {this.props.sessionNumber}</p>
        {this.props.children}
      </div>
    );
  }
}

export class ClassComponentWithState extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      isVisible: false,
    };
    this.plusClickHandler = this.plusClickHandler.bind(this);
  }

  plusClickHandler() {
    // console.log(this);
    console.log(this.state);
    this.setState({ ...this.state, counter: this.state.counter + 1 });
  }

  minusClickHandler = () => {
    console.log(this);
    this.setState({ ...this.state, counter: this.state.counter - 1 });
  };

  hideHandler = () => {
    this.setState({ ...this.state, isVisible: false });
  };
  showHandler = () => {
    this.setState({ ...this.state, isVisible: true });
  };
  toggleHandler = () => {
    this.setState({ ...this.state, isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <h2 className='title'>State full Component</h2>
        <button onClick={this.plusClickHandler}>+</button>
        <button onClick={this.minusClickHandler}>-</button>
        <p>counter : {this.state.counter} </p>

        <button onClick={this.showHandler}>Show</button>
        <button onClick={this.hideHandler}>Hide</button>
        <button onClick={this.toggleHandler}>Toggle</button>

        {/* <div style={{display: this.state.isVisible ? 'block': 'none'}}> */}
        {this.state.isVisible ? (
          <ClassComponent sessionNum1ber={4} message='Hello react class component'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, totam facilis
              quasi autem ipsa ab labore soluta, unde magni aliquam sit architecto minus possimus
              quod repellendus earum delectus. Harum, repellat!
            </p>
          </ClassComponent>
        ) : null}
      </div>
      // </div>
    );
  }
}
