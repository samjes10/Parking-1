import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './components/user/User'
import './styles/global/global.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
