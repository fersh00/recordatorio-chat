import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

export const Chat = () => {
	const { logout } = useContext(AuthContext)
	return (
		<div>
			<h1>Chat</h1>
			<button
				onClick={logout}
				className='button is-info'
			>
				Logout
			</button>
		</div>
	)
}
