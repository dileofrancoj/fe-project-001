import * as React from 'react'

import LoginForm from './components/LoginForm/LoginForm'
import Navbar from './components/Navbar/Navbar'

function App (): React.JSX.Element {
  return (
    <>
    <Navbar />
    <LoginForm />
    </>
  )
}

export default App
