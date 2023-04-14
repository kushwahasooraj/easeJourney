import React from "react"
import { Route, Routes } from "react-router-dom"
import Trainsearch from "./Trainsearch"
import Home from "./Home"

const RouteNavs =()=>{
return(
    <>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/trainsearch' element={<Trainsearch/>}/>
   </Routes>
    </>
)
}
export default RouteNavs