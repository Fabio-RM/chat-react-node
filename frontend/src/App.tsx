import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./components/Auth/Signup"
import Login from "./components/Auth/Login"
import Chat from "./components/Chat/Chat"

function App() {
    return (
      	<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/chat" element={<Chat />} />
			</Routes>
		</BrowserRouter>
    )
}

export default App
