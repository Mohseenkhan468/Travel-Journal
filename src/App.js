import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css'
import data from './components/data';
export default function App(){
  const cards=data.map(card=><Card key={card.id} {...card} />)
  return(
    <div>
      <Navbar/>
      <section>
      {cards}
      </section>
    </div>
  )
}