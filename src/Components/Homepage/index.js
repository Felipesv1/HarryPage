import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import * as S from './Style'
import Logo from './img/logo.png'
import Castelo from './img/castelo.webp'
export default function Homepage(){

  const [msg,setMsg] = useState('Welcome to Hogwarts !!! ')

  useEffect(()=> {

    setInterval(()=> {
      if(msg === 'Welcome to Hogwarts !!! '){
        setMsg('Meet the students and staff of hogwarts !!!')
      }else{
        setMsg('Welcome to Hogwarts !!! ')
      }
    },5000)
  })

  return(

    <S.Container>
    <S.HeaderLinks>
    <S.ImgLogo src={Logo} alt=''/>
   <Link to='/'> 
     Homepage
    </Link>
    <Link to='/Students'> 
     Students
    </Link>
    <Link to='/Staff'> 
     Staff
    </Link>
    </S.HeaderLinks>
    <S.boxHome>
     <h1>{msg}</h1>
    <S.Img src={Castelo} alt=''/>
    </S.boxHome>
    </S.Container>
  )
}