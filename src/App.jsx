// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card/Card';
import Data from './data.json'

function App() {
  // const [count, setCount] = useState(0)


  const toDoTitle = "Hello";
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const ReactStyle = {
    color: "white",
    fontSize: "3rem",
    textAlign: "center",


  };
  const color = {
    color: "white",
    textAlign: "center"
  }
  return (
    <>
      <div style={{ backgroundColor: "purple", padding: "20px", borderRadius: "10px" }}>
        <h1 style={ReactStyle}>Vite + React</h1>
        <div>
          <h1 >{toDoTitle}</h1>
          <p style={color}>Day: {day} / {month} / {year}</p>
          <p className='pady'>Today: {day + "/" + month + "/" + year}</p>
        </div>
        <div className="card-container">
          <Card foodName= {Data[0].foodName} favouriteFood={Data[0].foodDes}></Card>
          <Card foodName= {Data[1].foodName} favouriteFood={Data[1].foodDes}></Card>
          <Card foodName= {Data[2].foodName} favouriteFood={Data[2].foodDes}></Card>
        </div>

      </div>

    </>
  )
}

export default App
