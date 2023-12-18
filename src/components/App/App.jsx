import './App.css'
import Nav from '../Nav/Nav'
import Main from '../../pages/Main/Main'
import Profile from '../../pages/Profile/Profile'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
