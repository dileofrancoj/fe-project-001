import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FallbackRoute from '../components/FallbackRoute'
import Navbar from '../components/Navbar'
import { UserProvider } from '../contexts/User/Provider'
import { routes } from './routing'
// Fallback Route
// Navbar

export const Navigation = (): React.JSX.Element => {
  return (
        <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            {routes.map(({ path, to, Component }) => (
              <Route key={path} path={to} element={ <Component /> }/>
            ))}
            <Route path="/*" element={<FallbackRoute /> } />
          </Routes>
        </UserProvider>

        </BrowserRouter>
  )
}
