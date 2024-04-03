
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Platform from './Components/Platform'
import Skill from './Components/Skill'
import Job from './Components/Job'
import Footer from './Components/Footer'
import Projects from './Components/Projects'

export default function App() {
  return (
    <div>
      <NavBar/>
        <Hero/>
        <Platform/>
        <Job/>
        <Skill/>
        
        <Projects/>
       <Footer/>
      
    </div>


  )
    

}
