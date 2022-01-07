import React from 'react'
import { logout } from '../../utils/auth/login'

export const LogoutPage = () => {
  return (
    <div>
      <button onClick={()=>{logout()}}>Logout</button>
    </div>
  )
}
