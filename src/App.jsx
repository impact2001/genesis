import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Home from "./views/Home"
import Project from "./views/Project"


const App = () => {
  return (
    <div className="min-h-screen relative">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects/:id" element={<Project/>}/>
      </Routes>      
    </div>
  )
}

export default App
