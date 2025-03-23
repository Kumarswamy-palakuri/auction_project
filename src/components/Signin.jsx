import { useState } from 'react'

import './Style.css'

function Signin() {
  
  return (
    <>
    <form>
      <h1>Username or Email</h1>
      <input type='text' placeholder='Username'/>
      <h1>Password</h1>
      <input type='password' placeholder='Password'/>
      <button>Signin</button>
    </form>
    </>
  )
}

export default Signin
