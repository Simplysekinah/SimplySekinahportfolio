import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Main from './Components/Main'
import About from './Components/About'
import Project from './Components/Project'
import Contacts from './Components/Contacts'
function App() {

  return (
    <>
      <div>
        <Nav />
        <Main/>
        <About/>
        <Project/>
        <Contacts/>
        <Routes>
          <Route />
        </Routes>
      </div>
    </>
  )
}

export default App
