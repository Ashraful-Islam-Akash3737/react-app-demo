// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card/Card';
import Data from './data.json'

function App() {
  // const [count, setCount] = useState(0)

  // solution 1
  // let items = [];
  // for (let x = 0; x < Data.length; x++) {
  //   items.push(<Card key={x} foodName={Data[x].foodName} favouriteFood={Data[x].foodDes} />);
  // }


  // solution 3
  // let items = [];
  // items = Data.map((item, index)=> <Card key={index} foodName={item.foodName} favouriteFood={item.foodDes} /> )


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

  // array of objects
  const users = [
    {
      fullname: "Ashraful Islam Akash",
      age: 20,
      phones: [
        { home: "01834847556" },
        { office: "01755464748" },
      ]

    },
    {
      fullname: "Ashraful Islam Akash",
      age: 20,
      phones: [
        { home: "01834877556" },
        { office: "01735464748" },
      ]

    },
  ]

  return (
    <div style={{ backgroundColor: "purple", padding: "20px", borderRadius: "10px" }}>
      <h1 style={ReactStyle}>Vite + React</h1>
      <div>
        <h1 >{toDoTitle}</h1>
        <p style={color}>Day: {day} / {month} / {year}</p>
        <p className='pady'>Today: {day + "/" + month + "/" + year}</p>
      </div>
      {/* solution 1 */}
      {/* <div className="card-container">{items}</div> */}



      {/* solution 2 */}
      {/* <div className="card-container">
      <Card foodName={Data[0].foodName} favouriteFood={Data[0].foodDes}></Card>
      <Card foodName={Data[1].foodName} favouriteFood={Data[1].foodDes}></Card>
      <Card foodName={Data[2].foodName} favouriteFood={Data[2].foodDes}></Card>
      
      </div> */}


      {/* solution 3 */}
      {/* <div className="card-container">{items}</div> */}



      {/* solution 4 */}
      <div className="card-container">{Data.map((item, index) => <Card key={index} foodName={item.foodName} favouriteFood={item.foodDes} />)}</div>



      {/* nested mapping */}
      {
        users.map((user, index) => (<article key={index} className='artic'>
          <h3>Fullname:{user?.fullname}</h3>
          <p>Age:{user?.age}</p>
          {/* <p>Home:{user?.phones[0]?.home}</p>
          <p>Office:{user?.phones[1]?.office}</p> */}
          {
            user.phones.map((phone, index) => <div key={index}>
              <p>Home:{phone.home}</p>
              <p>Office:{phone.office}</p>
            </div>)
          }
        </article>))
      }

    </div>

  )

}

export default App
