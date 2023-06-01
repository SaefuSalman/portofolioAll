import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';



class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <>
      <Navbar/>
      <Hero />

      <Projects />
      </>
    )
  }
}
export default App