import * as React from 'react'

import type { User } from '../../types/User'

export interface UserContextProps {
  user: User | null
  setUser: (user: User) => void
  logout: () => void
}

export const UserContext = React.createContext<UserContextProps | null>(null)
