import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from '../src/components/Character'
import data from './mocks/handlers.js'
export const BASE_URL = "https://swapi.dev/api/people"

const App = () => {
  const [items, setItems] =useState([])
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setItems(res.data);
      }).catch(err => {
        console.error(err);
      })
  }, []
  )

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
  
      <h1 className="Header">Star Wars Major Characters List</h1>
     <Character items ={items}/>
    </div>
  );
}
export default App;