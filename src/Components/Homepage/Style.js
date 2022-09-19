import styled from 'styled-components'

export const Container = styled.section`

text-align:center;
width:100%;

h1{
    font-size:1.9rem;
}
`
export const HeaderLinks = styled.header`
width:100%;
height:70px;
background: brown;
display:flex;
justify-content:space-around;
align-items:center;
a{
    text-decoration:none;
    color:black;
    font-size:1.2rem;
    font-family: sans-serif;
    transition: 0.4s all ;
    &:hover{
      transform:scale(1.2);
}
}
`
export const ImgLogo = styled.img`
width:80px;
`
export const boxHome = styled.section`
width: 100%;
margin-top: 50px;
`
export const Img = styled.img`

border:solid;
margin-top: 50px;
width:600px;
height:600px;
border-radius: 50%;
object-fit:cover;
`

