
import { useEffect, useState } from 'react'
import './App.css'
import Report from './Components/Report/Report'

import Selectionitem from './Components/Selectionitem/Selectionitem'

function App() {
 const[arrayofobjects,setarrayofobjects]=useState([
 
  
    {
        "Selectioncolor": "hsl(15, 100%, 70%)",
        "sideimg": "/public/icon-work.svg",
        "actifitylabel": "Work",
        "time": "32hrs",
        "timedetails": "Last Week- 36hrs",
        "id": 2
    },
    {
        "Selectioncolor": "hsl(195, 74%, 62%)",
        "sideimg": "/public/icon-play.svg",
        "actifitylabel": "Play",
        "time": "10hrs",
        "timedetails": "Last Week- 8hrs",
        "id": 3
    },
    {
        "Selectioncolor": "hsl(348, 100%, 68%)",
        "sideimg": "/public/icon-study.svg",
        "actifitylabel": "Study",
        "time": "4hrs",
        "timedetails": "Last Week- 7hrs",
        "id": 4
    },
    {
        "Selectioncolor": "hsl(145, 58%, 55%)",
        "sideimg": "/public/icon-exercise.svg",
        "actifitylabel": "Exercise",
        "time": "4hrs",
        "timedetails": "Last Week- 5hrs",
        "id": 5
    },
    {
        "Selectioncolor": "hsl(264, 64%, 52%)",
        "sideimg": "/public/icon-social.svg",
        "actifitylabel": "Social",
        "time": "5hrs",
        "timedetails": "Last Week- 10hrs",
        "id": 6
    },
    {
        "Selectioncolor": " hsl(43, 84%, 65%)",
        "sideimg": "/public/icon-self-care.svg",
        "actifitylabel": "SelfCare",
        "time": "2hrs",
        "timedetails": "Last Week- 2hrs",
        "id": 7
    }


]) 

//useEffect(()=>{
  //function callarray(){
   // fetch("http://localhost:3000/posts")
    //.then((response)=>{
     // return response.json()
   // })
   // .then((result)=>{
     //setarrayofobjects(result)
   // })
 // }
 // callarray()
//},[])

  return (
    <div id="main">
      <Report></Report>
      <div className='row'>
      {arrayofobjects.map((post)=>{
        
return(
  
  <>
  
  <Selectionitem
  key={post.id}
  Selectioncolor={post.Selectioncolor}
  sideimg={post.sideimg}
  actifitylabel={post.actifitylabel}
  time={post.time}
  timedetails={post.timedetails}
  ></Selectionitem>
  
  </>
 
)
      })}
      </div>
     
    </div>
  )
}

export default App
