import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const FallbackRoute = (): React.JSX.Element => {
  const navigate = useNavigate()

  React.useEffect(() => {
    navigate('/login')
  }, [navigate])

  return <Outlet />
}

export default FallbackRoute
