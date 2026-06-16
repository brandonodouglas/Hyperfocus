import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Routine from './components/RoutineRelated/Routine';
import RoutineForm from './components/RoutineRelated/RoutineForm'
import TaskTree from './components/TaskTreeRelated/TaskTree'



// My views
function Home() {
  const navigate = useNavigate()

  return (<>
    <section id="center">
      

      <div>
        <TaskTree />
        <h1>⚡ Hyper-focus</h1>
        <h2> Welcome to Brandon's productivity time saving tool. ✨</h2>
        <h3>At Hyperfocus, we understand that money and time are both important.</h3>
        <h4>So why budget just your MONEY and not ALSO your TIME? 🚀</h4>

      </div>
      <button
        type="button"
        className="counter"
        onClick={() => navigate('/myroutines')
        }
      >
        START
      </button>
    </section>

    <div className="ticks"></div>
    <h3>Expected release date: 1st Aug 2026. ✅</h3>

    <section id="next-steps">


    </section>

    <div className="ticks"></div>
    <section id="spacer"></section>
    <p>Coded by @brandonodouglas on github</p>
    <p>Powered by the MERN stack.</p>
  </>)
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>
}



function MyRoutines() {

  return (<>
    <RoutineForm />
   
  </>
  )
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myroutines" element={<MyRoutines />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
