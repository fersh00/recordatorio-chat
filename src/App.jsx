import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bulma/css/bulma.css'

import Login from './pages/Login'
import Chat from './pages/Chat'
import Register from './pages/Register'
import PrivateRouter from './router/PrivateRouter'

function App() {
	return (
		<>
			<div>
				<Router>
					<Routes>
						<Route element={<PrivateRouter />}>
							<Route
								path='/'
								element={<Chat />}
								exact
							/>
						</Route>

						<Route
							path='/login'
							element={<Login />}
						/>
						<Route
							path='/register'
							element={<Register />}
						/>
					</Routes>
				</Router>
			</div>
		</>
	)
}

export default App
