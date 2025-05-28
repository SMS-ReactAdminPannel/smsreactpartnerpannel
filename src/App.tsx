import "./App.css"
import {BrowserRouter} from "react-router-dom"
import { AuthProvider } from "./pages/auth/AuthContext"
import AppRoutes from "./routes/AppRoutes"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App