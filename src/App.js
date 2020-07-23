import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import Header from './Components/Header';
import React, { Component } from 'react'
import './App.css';


class App extends Component {
  render(){
  return (
    <div>
      <Header/>
      <p> body here</p>
      <Footer/>
    </div>
   );
  }
}

export default App;
