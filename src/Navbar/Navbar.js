import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {makeStyles} from '@mui/styles'
const Navbar = () => {

    const Data=[
        {
            to:"/letsgo",
            label:"Ride",
        },
        {
            to:"/rides",
            label:"Previous Rides",
        },
        {
            to:"/amout",
            label:"Wallet",
        },
        {
            to:"/logout",
            label:"Logout"
        },
        
    ]
    const navigate=useNavigate();
    const styles=makeStyles(()=>({
        main:{
            width:"100%",
            height:"10vh",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            display:"flex",
            alignItems:"center",
            marginBottom:"5px"
        },
        container:{
            width:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-around"
        }
    }))
    function handleOnClick(event){
        const {name}=event.target;
        navigate(name)
    }
    const classes=styles()
  return (
    <div className={classes.main}>
        <div className={classes.container}>
            {Data.map(({to,label},index)=>{
                return <Button onClick={handleOnClick} key={index} name={to} >{label}</Button>
            })}
        </div>
    </div>
  )
}

export default Navbar