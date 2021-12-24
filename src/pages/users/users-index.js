import React, { Component } from 'react';
import axios from 'axios';
import { BasePage } from '../../components/base-page';
import UserTable from './user-table';
import styles from './users.module.css'

export default class UsersPageIndex extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
      // console.log(result);
      this.setState({ userList: result.data, isLoading: false });
    });
  }

  deleteUserHandel = (id) =>{
    // console.log('Delete ' + id)
    /** Confirm **/


    this.setState({isLoading: true})
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(result => {
      // console.log(result)
      
      // const userList = [...this.state.userList.filter(user => user.id !== id)]
      // this.setState({isLoading: false, userList})

      this.setState({isLoading: false, userList: this.state.userList.filter(user => user.id !== id)})

    })
  }

  render() {
    return (
      <BasePage title='Users' className='container' isLoading={this.state.isLoading}>
        <div className={styles['add-panel']}>
          <button>
            <span className='material-icons'>add</span>
          </button>
        </div>
        <UserTable userList={this.state.userList} onDelete={this.deleteUserHandel}/>
      </BasePage>
    );
  }
}
