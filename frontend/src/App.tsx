import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./components/Auth/Signup"
import Login from "./components/Auth/Login"
import Chat from "./components/Chat/Chat"
import { AuthProvider } from './context/AuthContext'
import RequireAuth from "./components/Auth/RequireAuth"


function App() {
    return (
      	<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />

					<Route element={<RequireAuth />}>
						<Route path="/chat" element={<Chat />} />
					</Route>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
    )
}

export default App
