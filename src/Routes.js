import React from "react"
import { Route, Routes } from "react-router-dom"
import Trainsearch from "./Trainsearch"
import Home from "./Home"
import Monument from "./Monument"


const RouteNavs =()=>{
return(
    <>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/trainsearch' element={<Trainsearch/>}/>
    <Route exact path='/monument' element={<Monument/>}/>
   </Routes>
    </>
)
}
export default RouteNavs