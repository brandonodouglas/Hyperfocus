import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Routine from './components/RoutineRelated/Routine';
import RoutineForm from './components/RoutineRelated/RoutineForm'
import TaskTree from './components/TaskTreeRelated/TaskTree'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { PrimeReactProvider } from 'primereact/api'
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './index.css';
import './flags.css';


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

function Todos() {
  const [nodes, setNodes] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(null);


  useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []);


  return (
    <div className="card flex justify-content-center">
            <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} dragdropScope="demo" onDragDrop={(e) => setNodes(e.value)} className="w-full md:w-30rem" />
        </div>
  );
}





function MyRoutines() {

  return (<>
    <RoutineForm />

  </>
  )
}

function App() {
  return (
    <PrimeReactProvider>


      <BrowserRouter>
        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
          <Link to="/todos">Todos</Link>
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myroutines" element={<MyRoutines />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App
