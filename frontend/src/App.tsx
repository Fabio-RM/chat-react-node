import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./components/Auth/Signup"
import Login from "./components/Auth/Login"

function App() {
    return (
      	<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
    )
}

export default App
