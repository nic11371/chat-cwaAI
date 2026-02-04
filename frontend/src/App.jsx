import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './Components/MainPage.jsx'
import LoginPage from './Components/LoginPage.jsx'
import NotFoundPage from './Components/NotFoundPage.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
