import React from 'react'
import { FiHome, FiMap, FiEdit3, FiBriefcase, FiBook, FiMail } from "react-icons/fi";

export const MenuData =[
    {
        title: "Hotel",
        url: "/",
        cName: "nav-links",
        icon: <FiMap size={20}/>
    },
    {
        title: "Police Station",
        url: "/",
        cName: "nav-links",
        icon: <FiEdit3 size={20}/>
    },
    {
        title: "School",
        url: "/",
        cName: "nav-links",
        icon: <FiBriefcase size={20}/>
    },
    {
        title: "Old Age Home",
        url: "/",
        cName: "nav-links",
        icon: <FiBook size={20}/>
    },
    {
        title: "Hospital",
        url: "/",
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
        url: "/",
        cName: "nav-links",
        icon: <FiHome size={20}/>
    },
    {
        title: "Train",
        url: "/",
        cName: "nav-links",
        icon: <FiEdit3 size={20}/>
    }
    

]
export const BookingAll =[
    {
        title: "Hotel",
        url: "/",
        cName: "nav-links",
        icon: <FiHome size={20}/>
    },
    {
        title: "Bus Ticket",
        url: "/",
        cName: "nav-links",
        icon: <FiEdit3 size={20}/>
    },
    {
        title: "Train Ticket",
        url: "/",
        cName: "nav-links",
        icon: <FiEdit3 size={20}/>
    }
    

]