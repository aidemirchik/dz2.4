import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState("вы успешно зарегестрировались")
  const [lastName, setLastName] = useState("вы успешно зарегестрировались")
  const [email, setEmail] = useState("вы успешно зарегестрировались")


  return (
<div className='qwe'>
        <p className='blkk'> рег {name}</p>
        <p className='paa'>   зарегистрирван: {lastName}  </p>
        <div className="input">

            
            <input type="text" placeholder='First Name' />
            <br></br>
            <input type="text" placeholder='Last Name' />
            <br></br>
            <input type="text" onChange={(event) => setEmail(event.target.value)} placeholder='Email' />
            <br></br>
            <button onClick={() => setLastName(lastName + email) } className='btn'>Register</button>
            <button onClick={() => setName(lastName + email) } className='btn'>Register</button>

        </div>
    </div>
  )
}

export default App