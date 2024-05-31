import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Main from './Components/Main'
import About from './Components/About'
import Project from './Components/Project'
import Contacts from './Components/Contacts'
import Allwork from './Components/Allwork'
function App() {

  return (
    <>
      <div>
        <Nav />
        <Main/>
        <About/>
        <Project/>
        <Contacts/>
      </div>
    </>
  )
}

export default App
