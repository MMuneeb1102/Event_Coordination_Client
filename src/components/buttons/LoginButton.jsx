import React from 'react'
import '../../css/LoginButton.css'
import { useNavigate } from 'react-router-dom'

const LoginButton = ({btnText, onClickFunction}) => {
    const navigate = useNavigate()
  return (
    <button className='login-btn' onClick={onClickFunction}>{btnText}</button>
  )
}

export default LoginButton