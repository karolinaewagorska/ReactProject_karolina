import React from 'react';
import logo from './logo.svg';
import './App.css';
import { count, length } from './number';


const city = 'London';
const drinking_age = 18;
const age = 17.5;
const name = undefined
const bank_account = null;
const car = true


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p> 
          count * length = {count*length}
        </p>
        <p>Hello, it's my first app!</p>

        <h3 style ={{
          color: 'yellow',
          fontFamily: 'Helvetica'
        }}> {city} is the capital of Great Britain
        </h3>

        <p> {18 + 198/12} </p>
        <p> {drinking_age} </p>
        <p> { drinking_age > age && 'You are not allowed to drink'} </p>

        <p>{ age >= drinking_age ? 'Buy drink' : 'Watch some Netflix' } </p>

        <ul>
          <li> {name} </li>
          <li> {bank_account} </li>
          <li> {car} </li>
          <li> {!car} </li>
        </ul>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
