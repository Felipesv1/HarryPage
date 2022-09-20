import React,{useState,useEffect,useRef} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {ApiStudents} from '../../Services/Apis'
import * as S from './Style'
import logo from './img/logo.png'

export default function Students(){




const [students,setStudents] = useState([])

const [error,setError] = useState('')
const refStudents = useRef(students)

useEffect(() => {

  axios.get(ApiStudents).then(res => {
   setStudents(res.data.slice(0,11))
  }).catch((error) => {
    setError("Deu Erro ai " + error )
  })
})


  return(

    <S.Container ref={refStudents}>
      <S.HeaderLinks>
      <S.Imglogo src={logo} alt=''/>
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
      <h1> Students</h1>
    <S.Boxul>{students.map((item) => (
      <S.BoxCards>
      <li>{item.name}</li>
      <S.Img src={item.image} alt={item.name}/>
      </S.BoxCards>
    ))}</S.Boxul>
    <h2>{error}</h2>
    </S.Container>
  )
} 