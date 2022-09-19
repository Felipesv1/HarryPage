import styled from 'styled-components'

export const Container = styled.section`

text-align:center;

h1{
    font-size:1.9rem;
    margin-top:20px;
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
}
`

export const ImgLogo = styled.img`

width:80px;

`


export const Img = styled.img`

border:solid;
width:200px;
height:300px;
object-fit:cover;
`

export const Boxul = styled.ul`
width:100%;
display: flex;
flex-wrap: wrap;
justify-content:center;
list-style: none;
text-align: center;
`
export const BoxCards = styled.section`
margin-top:10px;
margin-left: 20px;

`