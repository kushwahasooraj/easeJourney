import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Box from '@mui/material/Box'
import {Stack, TextField} from '@mui/material'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import Button from '@mui/material/Button'
import TableRow from '@mui/material/TableRow'
import Swal from "sweetalert2"

const Trainsearch =()=>{
  const[dataa,setdata]=useState([])
  const[show,setshow]=useState(false)
const[formData, setFormData] = useState({
  fromtrain:"",
  totrain:""
})

const[value,setvalue]=useState("")
// console.log(value)
const onInputchange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}
const onInputchange2=(newValue)=>{
  setvalue(`${newValue.$y}-${newValue.$M+1}-${newValue.$D}`)
}
// console.log(formData)

const getData = async()=>{

  await fetch(`https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${formData.fromtrain}&toStationCode=${formData.totrain}&dateOfJourney=${value}`,{
    method:"GET",
    headers:{
        Accept: 'application/json',
        "Content-Type": "application/json",
        "X-RapidAPI-Key":"cb699ae246msh7f7e3c0e1bd58fdp10186djsncd748a6b39e0"
    }
}).then((res) => res.json())
    .then((response)=>{
        console.log(response)
        
        setdata(response)
        setshow(true)
        
    })
}
// const object={
//   id:"1",
//   name:[
//     {
//       id:"1",
//       sname:"Shubham",
//       lname:"singh"

//     },
//     {
//       id:"2",
//       sname:"Shubham",
//       lname:"mohit"

//     },
//     {
//       id:"2",
//       sname:"Shubham",
//       lname:"verma"

//     },
//     {
//       id:"2",
//       sname:"Shubham",
//       lname:"nohit"

//     },
//   ],
//   message:"hello"
// }
// //console.log(object)
//  Object.values(object.name).map((x)=>console.log(x.lname))
    return(
        <>
        <Navbar/>

        <section className="place section" id="place">
            <h2 className="section__title">Search Trains</h2>

            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField placeholder="Please Enter Station Code" id="outlined-basic" onChange={(e)=>onInputchange(e)} label="From Station" variant="outlined"  name='fromtrain'/>
      <TextField id="outlined-basic" placeholder="Please Enter Station Code" label="To Station" onChange={(e)=>onInputchange(e)} name="totrain" variant="outlined" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
          'StaticDatePicker',
        ]}
      >
       
        <DemoItem  label="Journey Date">
          <MobileDatePicker onChange={(newValue)=>onInputchange2(newValue)} defaultValue={dayjs('2023-04-14')} />
        </DemoItem>
        
        
      </DemoContainer>
    </LocalizationProvider>
    
    </Box>

    
              
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={()=>getData()} style={{left:"20px"}}>Submit</Button>
     
    </Stack>
            </section>
          {show === true ?  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Train Name</TableCell>
            <TableCell align="right">Train No</TableCell>
            <TableCell align="right">Date of Journey</TableCell>
            <TableCell align="right">Depature Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(dataa.data).map((row, index) => (
            <TableRow key={index}>
             
              <TableCell component="th" scope="row">
                {row.train_name} 
              </TableCell>
              <TableCell align="right">{row.train_number}</TableCell>
              <TableCell align="right">{row.train_date}</TableCell>
              <TableCell align="right">{row.from_sta}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>:null}
  <Footer/>
        </>
    )
}
export default Trainsearch