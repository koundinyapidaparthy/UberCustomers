import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'
import {AppLevelContext} from "../Context/CreateContext"
import { useNavigate } from 'react-router-dom'

// const permissionStatus={
//   1: "Geolocation is not supported by this browser.",
//   2:"User denied the request for Geolocation.",
//   3:"Location information is unavailable.",
//   4:"The request to get user location timed out.",
//   5:"An unknown error occurred."
// }

const ApplyRide = () => {
      const navigate = useNavigate();
      const contextData=React.useContext(AppLevelContext);
      const UserName=contextData.userDetails.loggedIn;

      const Data = [
       
        { title: 'Snatch', year: 2000 },
        { title: '3 Idiots', year: 2009 },
        { title: 'Monty Python and the Holy Grail', year: 1975 },
      ];
      const styles=makeStyles(()=>({
        main:{

        },
        container:{
          width:"100%",
          display:"flex",
          alignItems:"center",
          justifyContent:"space-around"
        }
      }));
      const classes=styles();
      const [currentLocation,setCurrentLocation]=React.useState({
        latitude:null,
        longitude:null,
        loading:true,
        permissionStatus:null,
      })
      console.log({currentLocation})

      React.useEffect(()=>{
       
        getLocation()
      },[]);
      function showPosition(position) {
        setCurrentLocation((prev)=> ({
          ...prev,
          loading:false,
          geoLocationSupport:true,
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        }))
      }
      
    function showError(error) {
      
      switch(error.code) {
        case error.PERMISSION_DENIED:
          callBackForCurrentState(2)
          break;
        case error.POSITION_UNAVAILABLE:
          callBackForCurrentState(3)
          break;
        case error.TIMEOUT:
          callBackForCurrentState(4)
          break;
        case error.UNKNOWN_ERROR:
          callBackForCurrentState(5)
          break;
        default:
          callBackForCurrentState(5)
      }
    }

      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition,showError);
        } else {
          callBackForCurrentState(0)
          
        }
      }
      React.useEffect(()=>{
        if(UserName){
          navigate("/letsgo") 
        }
      },[])
      function callBackForCurrentState(val){
        setCurrentLocation((prev)=> ({
          ...prev,
          permissionStatus:val
        }))
      }

      



      function textFieldChange(event){
        const {name,value}=event.target;
        if(name==="pickup"){
          // Query call for this
        }
        else{
          // Query call for this
        }
      }
  return (
    <div>
      <div className={classes.container}>
          <Autocomplete 
            id="combo-box-demo"
            options={Data}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Pick Up" name="pickup" onChange={textFieldChange} />}
          /> 
          <div>--- to ---</div>
          <Autocomplete 
            id="combo-box-demo"
            options={Data}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Drop"name="drop" onChange={textFieldChange} />}
          /> 

          <Button> Ride</Button>
      </div>
    </div>
  )
}

export default ApplyRide