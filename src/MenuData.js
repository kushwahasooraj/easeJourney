import React from 'react'
import { FiHome, FiMap, FiEdit3, FiBriefcase, FiBook, FiMail } from "react-icons/fi";

export const MenuData =[
    {
        title: "Monuments",
        url: "/monument",
        cName: "nav-links",
        icon: <FiMap size={20}/>
    },
    {
        title: "Hotel",
        url: "/hotelsearch",
        cName: "nav-links",
        icon: <FiMap size={20}/>
    },
    {
        title: "Police Station",
        url: "http://localhost:8000/info/POLICE%20STATION/",
        cName: "nav-links",
        icon: <FiEdit3 size={20}/>
    },
    {
        title: "School",
        url: "http://localhost:8000/info/Schools/",
        cName: "nav-links",
        icon: <FiBriefcase size={20}/>
    },
    {
        title: "Old Age Home",
        url: "http://localhost:8000/info/Old%20Age%20Home/",
        cName: "nav-links",
        icon: <FiBook size={20}/>
    },
    {
        title: "Hospital",
        url: "http://localhost:8000/info/Hospitals/",
        cName: "nav-links",
        icon: <FiMail size={20}/>
    }
    /*{
        title: "SignIn",
        url: "/login",
        cName: "nav-links-sign"
    },*/

]

export const TransportAll =[
    {
        title: "Bus",
        url: "https://www.google.com/maps/dir/28.5987878,77.320955//@28.5987816,77.2797553,13z/data=!3m1!4b1!4m5!4m4!1m1!4e1!1m0!3e3",
        cName: "nav-links",
        icon: <FiHome size={20}/>
    },
    {
        title: "Train",
        url: "/trainsearch",
        cName: "nav-links",
        icon: <FiEdit3 size={20}/>
    }
    

]
export const BookingAll =[
    {
        title: "Hotel",
        url: "https://www.makemytrip.com/hotels/",
        cName: "nav-links",
        icon: <FiHome size={20}/>
    },
    {
        title: "Bus Ticket",
        url: "https://www.redbus.in/?gclid=CjwKCAjw0N6hBhAUEiwAXab-TfNonIxidyc_dewTtCp_G-DEZhPCMKTxkLERwqcDF1d5h64-k4vmNhoCSqwQAvD_BwE",
        cName: "nav-links",
        icon: <FiEdit3 size={20}/>
    },
    {
        title: "Train Ticket",
        url: "https://www.irctc.co.in/nget/train-search",
        cName: "nav-links",
        icon: <FiEdit3 size={20}/>
    }
    

]