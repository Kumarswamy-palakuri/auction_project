import { useState } from 'react'

import './Style.css'

function Signin() {
  
  return (
    <>
    <form>
      <h1>Signin</h1>
      <input type='text' placeholder='Username'/>
      <input type='password' placeholder='Password'/>
      <button>Signin</button>
    </form>
    </>
  )
}

export default Signin
