import React from 'react'

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, dateOfBirth, monthOfBirth, yearOfBirth, image } =
          person
        const today = new Date()
        let year = today.getFullYear()
        let date = today.getDate()
        let month = today.getMonth()
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>
                {dateOfBirth} {monthOfBirth} {yearOfBirth}
              </p>
              <p>{year - yearOfBirth} years</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
