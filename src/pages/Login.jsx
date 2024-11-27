import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    // logic
    const history = useNavigate()
    
    // view
    return (
    <div>
        Login🌍
        <br />
        <button type='button' className='block bg-slate-600' onClick={() => history('/')}>
            Home으로 이동💨
        </button>
    </div>
  )
}

export default Login