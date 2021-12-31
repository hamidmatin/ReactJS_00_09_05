import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { BasePage } from '../../components/base-page'
import UserForm from './user-form'

export default class UserEditPage extends Component {
  
  render() {
    console.log(this.props)
    return (
      <BasePage title='User Edit'>
        <UserForm />
      </BasePage>
    )
  }
}
