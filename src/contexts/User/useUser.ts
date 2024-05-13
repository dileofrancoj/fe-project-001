import * as React from 'react'

import { UserContext, type UserContextProps } from './context'

export function useUser (): UserContextProps {
  const context = React.useContext(UserContext)
  if (context === null || context === undefined) {
    throw new Error('useUser must be used within a User Context')
  }

  return context
}
