import { Outlet, Navigate } from "react-router-dom"

const PrivateRouter = () => {
    const isAuthenticated = false;
  return (
    isAuthenticated ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PrivateRouter