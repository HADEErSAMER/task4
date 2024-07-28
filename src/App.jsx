
import { useState } from 'react'
import './App.css'
import Report from './Components/Report/Report'
import Selection from './Components/Selection/Selection'
import germyimg from "./assets/image-jeremy.png"
import work from"./assets/icon-work.svg"
import play from "./assets/icon-play.svg"
import study from "./assets/icon-study.svg"
import ex from "./assets/icon-exercise.svg"
import social from"./assets/icon-social.svg"
import care from "./assets/icon-self-care.svg"
import Selectionitem from './Components/Selectionitem/Selectionitem'

function App() {
 const[arrayofobjects,setarrayofobjects]=useState([
  {
    germyimg:germyimg,
    reportlabel:"Reportfor",
    germyname:"Jeremy Robson",
    daily:"Daily",
    weekly:"Weekly",
    monthly:"Monthly",
    id:1,
  },

  {
sideimg:work,
actifitylabel:"Work",
time:"32hrs",
timedetails:"Last Week- 36hrs",
id:2,
  },

  {
    sideimg:play,
    actifitylabel:"Play",
    time:"10hrs",
    timedetails:"Last Week- 8hrs", 
    id:3,
  },
  {
    sideimg:study,
    actifitylabel:"Study",
    time:"4hrs",
    timedetails:"Last Week- 7hrs",
    id:4,
  },

  {
    sideimg:ex,
    actifitylabel:"Exercise",
    time:"4hrs",
    timedetails:"Last Week- 5hrs",
    id:5,
  },

  {
    sideimg:social,
    actifitylabel:"Social",
    time:"5hrs",
    timedetails:"Last Week- 10hrs",
    id:6,
  },

  {
    sideimg:care,
    actifitylabel:"SelfCare",
    time:"2hrs",
    timedetails:"Last Week- 2hrs",
    id:7,
  },
]) 

  return (
    <div id="main">
      <Report></Report>
      
      {arrayofobjects.map((item)=>{
        
return(
  
  <>
  
  <Selectionitem
  key={item.id}
  sideimg={item.sideimg}
  actifitylabel={item.actifitylabel}
  time={item.time}
  timedetails={item.timedetails}
  ></Selectionitem>
  
  </>
 
)
      })}
     
    </div>
  )
}

export default App
