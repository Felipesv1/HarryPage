import React,{useState,useEffect,useRef} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import * as S from './Style'
import Logo from './img/logo.png'

export default function Students(){


const Api = 'http://hp-api.herokuapp.com/api/characters/staff'

const [Staff,setStaff] = useState([])

const [error,setError] = useState('')

const refStaff = useRef(Staff)

useEffect(() => {

  axios.get(Api).then(res => {
   setStaff(res.data.slice(0,8))
  }).catch((erro)=> {
    setError('Deu erro ai ' + error)
  })
})


  return(

    <S.Container ref={refStaff}>
      <S.HeaderLinks>
        <S.ImgLogo src={Logo} alt='logo'/>
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

      <h1>Staff</h1>
    
    <S.Boxul>{Staff.map((item) => (
      <S.BoxCards>
      <li>{item.name}</li>
      <S.Img src={item.image} alt={item.name}/>
      </S.BoxCards>
    ))}</S.Boxul>
    <h2>{error}</h2>
    </S.Container>
  )
} 