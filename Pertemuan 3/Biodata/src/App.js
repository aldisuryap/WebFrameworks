import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SubHeader from './SubHeader';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Skill from './Pages/Skill';
import Interest from './Pages/Interest';
import Footer from './Components/Footer';

class Header extends Component {
  render() {
    return (
      <div class="text-center mb-3 mt-5"><h1>Politeknik Negeri Malang</h1></div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <div id="wrapper">
          <About />
          <Experience />
          <Education />
          <Skill />
          <Interest />
        </div>
        <Footer />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <About />
//       <div id="wrapper">
//       </div>
//     </div>
//   );
// }

export default App;
