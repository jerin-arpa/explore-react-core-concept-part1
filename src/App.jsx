import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './actor'
import Singer from './Singer'
import BookStore from './BookStore'
import Book from './Book'



function App() {

  const actors = ['Sakib Khan', 'Raj', 'Jasim', 'Rubel', 'Salman Shah'];




  const books = [
    { id: 1, name: 'Physics', price: 100 },
    { id: 2, name: 'Chemistry', price: 200 },
    { id: 3, name: 'Biology', price: 250 },
    { id: 4, name: 'Math', price: 300 },
  ]


  const singers = [
    { id: 1, name: 'Dr. Mahfuzur Rahman', age: 68 },
    { id: 2, name: 'Eva Rahman', age: 38 },
    { id: 3, name: 'Shuvro Dev', age: 58 },
    { id: 4, name: 'Pritom', age: 28 },
  ]



  return (
    <>
      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>


      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }



      <Actor name={"Bappa Raj"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task="Core Concept"
        isDone={false}></Todo>
      <Todo
        task="Try JSX"
        isDone={true}></Todo> */}


      {/* <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="17000"></Device>
      <Device name="watch" price="3000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}


function Device(props) {
  return <h2>This Device: {props.name}, price: {props.price}</h2>
}


function Person() {
  const age = 20;
  const money = 3;
  const person = { name: 'jerry', age: 24 }
  return <h3>I am {person.name} with age: {age + money}</h3>
}



const { grade, score } = { grade: '7', score: '99' };

function Student({ grade = 1, score = 0 }) {
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}


function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px',
  }
  return (
    <div style={developerStyle}>
      <h5>developer Developer</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
