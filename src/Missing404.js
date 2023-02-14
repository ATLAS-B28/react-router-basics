import React from 'react'
import {Link} from 'react-router-dom'
const Missing404 = () => {
  return (
    <main>
      <h1>404 page</h1>
      
            <p>Well, that's disappointing.</p>
            <p>
                <Link to='/'>Visit Our Homepage</Link>
            </p>
    </main>
  )
}

export default Missing404
