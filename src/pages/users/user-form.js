import React, { Component } from 'react';
import styles from './users.module.css';

export default class UserForm extends Component {
  constructor() {
    super();

    this.state = {
      userData: {
        id: 0,
        name: '',
        username: '',
        email: '',
      },
      isDirty: false
    };
  }

  // nameChangeHandler = (e) => {
  //   this.setState({ ...this.state, userData: { ...this.state.userData, name: e.target.value } });
  // };

  // usernameChangeHandler = (e) => {
  //   this.setState({ ...this.state, userData: { ...this.state.userData, username: e.target.value } });
  // };

  changeHandler = (e) => {
    this.setState({
      isDirty: true,
      userData: { ...this.state.userData, [e.target.name]: e.target.value },
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onSave(this.state.userData);
    window.history.back();
  };

  render() {
    return (
      <form className={styles['form-wrapper']} onSubmit={this.onSubmitHandler} noValidate>
        <div className={styles['form-container']}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={this.state.userData.name}
            onChange={this.changeHandler}
          />

          <label htmlFor='username'>User Name</label>
          <input
            type='text'
            name='username'
            id='username'
            value={this.state.userData.username}
            onChange={this.changeHandler}
          />

          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            name='email'
            id='email'
            value={this.state.userData.email}
            onChange={this.changeHandler}
          />

          <div className={styles['button-wrapper']}>
            <button
              type='button'
              className={styles['btn-close']}
              onClick={() => {
                window.history.back();
              }}
            >
              Close <i className='material-icons'>cancel</i>
            </button>
            <button className={styles['btn-save']} disabled={!this.state.isDirty}>
              Save
              <i className='material-icons'>save</i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
