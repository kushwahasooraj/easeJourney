import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Box from '@mui/material/Box'
import { Stack, TextField } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import Button from '@mui/material/Button'
import TableRow from '@mui/material/TableRow'

const HotelSearch = () => {
  const [dataa, setdata] = useState([])
  const [show, setshow] = useState(false)
  const [formData, setFormData] = useState({
    Hotel: ""
  })
  // console.log(value)
  const onInputchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // console.log(formData)

  const getData = async () => {

    await fetch(`https://hotels4.p.rapidapi.com/locations/search?query=hotel%2C%20${formData.Hotel}&locale=en_US`, {
      method: "GET",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "a598b7234amsh155645fd883e261p16d371jsnf1aa0667162c"
      }
    }).then((res) => res.json())
      .then((response) => {
        console.log(response)
        setdata(response)
        setshow(true)
      })
  }
  //Object.values(dataa.suggestions[1].entities).map(row =>console.log(row.name))
  return (
    <>
      <Navbar />

      <section className="place section" id="place">
        <h2 className="section__title">Search Hotels</h2>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField placeholder="Please Enter Station Code" id="outlined-basic" onChange={(e) => onInputchange(e)} label="Hotal Location" variant="outlined" name='Hotel' />



        </Box>



        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => getData()} style={{ left: "20px" }}>Submit</Button>

        </Stack>
      </section>
      {show === true ? <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Sno</TableCell>
              <TableCell>Hotel Name</TableCell>
              {/* <TableCell align="right">Train No</TableCell>
            <TableCell align="right">Date of Journey</TableCell>
            <TableCell align="right">Depature Time</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(dataa.suggestions[1].entities).map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                {/* <TableCell align="right">{row.train_number}</TableCell>
              <TableCell align="right">{row.train_date}</TableCell>
              <TableCell align="right">{row.from_sta}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br/><br/>
      <button className="button">
        <a href='https://www.makemytrip.com/hotels/' target='_blank' rel='noreferrer'> Book Now</a>
      </button>
      </TableContainer> : null}
      
      <Footer />
    </>
  )
}
export default HotelSearch