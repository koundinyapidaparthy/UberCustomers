import React from 'react'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import makeStyles from "@mui/styles/makeStyles"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {AppLevelContext} from "../Context/CreateContext"
import { useNavigate } from 'react-router-dom'
import {useLazyQuery} from "@apollo/client"
import {LOGINQUERY} from "../queries"
const UserLogin = () => {
    const navigate = useNavigate();
    const contextData=React.useContext(AppLevelContext);
    const UserName=contextData.userDetails.loggedIn;
    const stateManagement=contextData.handleUserDetails
    const styles=makeStyles(()=>({
        main:{
            width:"100%",
            height:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        },
        container:{
            width:"100%",
            height:"25vh",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"space-between",
        },
        icon:{
            position:"absolute",
            marginLeft:"5.5rem !important"
        },
        input:{
            background:"#e8f0fe"
        }
    }))
    const classes=styles();
    const [loginDetails,setLoginDetails]=React.useState({username:"",password:""});
    const [showPassword, setShowPassword] = React.useState(false);
    const [getLoginDetails,{error}] =useLazyQuery(
      LOGINQUERY, {
        variables:{
          username:loginDetails.username,
          password:loginDetails.password
        },
        onCompleted:(data)=>{
          const userDetails=data.user_details;
          let UserExist=false
          if(Array.isArray(userDetails) && userDetails.length > -1){
            UserExist=data.user_details[0].Exist
          }
          console.log({userDetails,data})
          if(UserExist){
          stateManagement({
            loggedIn:true,
            userName:loginDetails.username
          })
          localStorage.setItem("username", loginDetails.username);
          navigate("/UberCustomers/letsgo") 

        }
        }
      }
    )
    React.useEffect(()=>{
      if(UserName){
        navigate("/UberCustomers/letsgo") 
      }
    },[UserName])
    function handleClick () {
      setShowPassword(prev => !prev);
    }
    function onChange(event){
        const {name,value}=event.target;
        setLoginDetails((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    function loginNow(){
      if(typeof loginDetails==="object" && loginDetails.username && loginDetails.password){
        getLoginDetails()
        
      }
    }
  return (
    <div className={classes.main}>
        <div className={classes.container}>
            <TextField 
                label='username' 
                name="username" 
                onChange={onChange} 
                className={classes.input} 
                />
            <TextField
                label='password' 
                name="password" 
                type={ showPassword ? "text" : "password"}
                onChange= {onChange}  
                className={classes.input}
                InputProps={{
                  endAdornment:  (
                    <InputAdornment position="end" className={classes.icon}>
                       <IconButton
                         onClick={handleClick}
                         edge="end"
                         className={classes.icon}
                       >
                         {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                       </IconButton>
                     </InputAdornment>
                  ) 
                }}
                      
            />
            <Button onClick={loginNow}>
                Login
            </Button>
        </div>
    </div>
  )
}

export default UserLogin