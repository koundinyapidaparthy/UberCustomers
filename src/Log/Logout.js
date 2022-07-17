import React from 'react'
import {AppLevelContext} from "../Context/CreateContext"
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const navigate = useNavigate();
    const contextData=React.useContext(AppLevelContext);
    const stateManagement=contextData.handleUserDetails

    React.useEffect(()=>{
        stateManagement({
            loggedIn:false,
            userName:"",
        })
        localStorage.setItem("username", "");
        navigate("/login")
    },[])
        
  return (
    <></>
  )
}

export default Logout