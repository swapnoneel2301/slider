import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import {Heading,People,Buttons} from './components/index.js';
function App() {
  const [people,setPeople] = useState(data);
  const [index,setIndex] = useState(0);
  const noOfPeople = people.length;

  useEffect(()=>{
     const timer = setInterval(()=>{
        setIndex((index+1)%noOfPeople);
     },2000);
     return ()=>{
        clearInterval(timer);
     }
  },[index]);

  return <section className='section'>
    <Heading />
    <div className="section-center">
      <People {...{people,index,FaQuoteRight}} />
      <Buttons {...{index,setIndex,noOfPeople,FiChevronLeft,FiChevronRight}}/>
    </div>
  </section>;
}

export default App;
