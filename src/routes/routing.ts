import type * as React from 'react'

import { Login } from '../pages/Login'

type JSXComponent = () => React.JSX.Element

interface Routes {
  to: string
  path: string
  Component: JSXComponent | React.LazyExoticComponent<JSXComponent>
}

export const routes: Routes[] = [
  {
    to: '/login',
    path: 'login',
    Component: Login
  }
]
