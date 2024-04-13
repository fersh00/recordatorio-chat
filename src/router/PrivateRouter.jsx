import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const PrivateRouter = () => {
	const { isAuthenticated } = useContext(AuthContext)
	return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
