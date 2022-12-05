import logo from './logo.svg';
import './App.css';
import React from 'react';
//import image1 from '../public/logo192.png'

class Firstcomponent extends React.Component
{
  render(){
    return(
      <div className="App">
        <h1>Student.com-First</h1>
        <Secondcomponent></Secondcomponent>
      </div>
    )
  }
}

class Secondcomponent extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>Student.com-Second</h1>

      </div>
    )
  }
}


class Thirdcomponent extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>Student.com-Third</h1>
      </div>
    )
  }
}

function Fourth(){
  return(
    <h1>Function based component</h1>
  )
}


function App() {
  return (
    <div className="App">
      <h1>Parent Component</h1>
      <Firstcomponent></Firstcomponent>
      <Thirdcomponent></Thirdcomponent>
      <Fourth></Fourth>

    </div>
   
  
  );
}

export default App;


