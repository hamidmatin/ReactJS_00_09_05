import React from 'react'
import { login } from '../../utils/auth/login'

export const LoginIndexPage = () => {
  return (
    <div>
      <button onClick={()=>{login('user', '1234')}}>Login</button>
    </div>
  )
}
