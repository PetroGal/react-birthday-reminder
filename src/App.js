import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  //default value
  const [people, setPeople] = useState(data)
  const today = new Date()
  const fullYear =
    today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
  let date = today.getDate()
  let month = today.getMonth()
  return (
    <main>
      <section className='container'>
        <h3>Date: {fullYear}</h3>
        <h4>{people.length} birthdays today</h4>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
