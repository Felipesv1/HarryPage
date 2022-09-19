import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Homepage from '../Components/Homepage'
import Students from '../Components/Students'
import Staff from '../Components/Staff'


export default  function Rotas (){

return(
<Router>
    <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/Students' element={<Students/>}></Route>
        <Route path='/Staff' element={<Staff/>}></Route>
    </Routes>
</Router>
)

}