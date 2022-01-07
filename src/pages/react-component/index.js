import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BasePage } from '../../components/base-page'

export const ReactComponent = () => {
  const linkStyle = {
    display: 'block',
    padding: '16px'
  }
  return (
    <BasePage title={`React Component`}>
      <div className="row">
        <aside style={{
          width: '20%'
        }}>
          <Link style={linkStyle} to='use-fc'>Function Component</Link>
          <Link style={linkStyle} to='use-cc'>Class Component</Link>
          <Link style={linkStyle} to='react-hook'>React Hook</Link>
        </aside>
        <main style={{
          width: '80%'
        }}>
          <Outlet />
        </main>
      </div>
    </BasePage>
  )
}
