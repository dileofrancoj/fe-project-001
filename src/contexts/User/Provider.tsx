import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import type { User } from '../../types/User'
import { UserContext } from './context'

interface UserProviderProps {
  children: React.ReactNode
}
// JSX.Element === ReactElement<any, any>

const emptyState: User = { name: '', jwt: '' }

export function UserProvider ({ children }: UserProviderProps): React.JSX.Element {
  const [user, setUser] = React.useState<User>(emptyState)
  const navigate = useNavigate()
  const logout = (): void => {
    // limpiar el storage
    setUser(emptyState)
    navigate('/login')
  }
  return (
    <UserContext.Provider value={{ logout, user, setUser }}>
        {children}
    </UserContext.Provider>
  )
}
