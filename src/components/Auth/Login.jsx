import React, { useState } from 'react'

const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("Email is"+" "+email)
    console.log("password is"+" "+password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex item-center justify-center'>  
      <div className=' border-2 border-emerald-700 p-20 rounded-xl'>
        <form 
        onSubmit={(e)=>{
submitHandler(e)
        }}
         className='flex flex-col items-center justify-center gap-8'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required className=' bg-transparent outline-none border-2 border-emerald-700 text-xl py-3 px-5 rounded-full placeholder:text-white' type="email"placeholder='Enter Your Email' />
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
           required className=' bg-transparent outline-none border-2 border-emerald-700 text-xl py-3 px-5 rounded-full placeholder:text-white' type="password" placeholder='Enter Password' />
          <button className='mt-5 text-white border-none outline-none border-2 bg-emerald-700 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
