import React from 'react'
import routesPath from "./RoutesPath"
import {Route,BrowserRouter as Router,Navigate,Routes} from "react-router-dom";
import {AppLevelContext} from "../Context/CreateContext"
import Navbar from "../Navbar/Navbar"
import { CircularProgress } from '@mui/material';
const RoutesCreated = () => {
  const contextData=React.useContext(AppLevelContext)
  const loggedIn =contextData.userDetails.loggedIn
  return (
    <div>
        <Router>
            {loggedIn && <Navbar />}
            <React.Suspense fallback={<CircularProgress />}>
              <Routes >
                  {routesPath.map(({exact,path,component:Component,forLogin},index)=>{
                    return <Route 
                              exact={exact}
                              path={path} 
                              key={index} 
                              element={loggedIn || forLogin ? <Component /> : <Navigate to="/login" />} />
                  })}
            </Routes>
            </React.Suspense>
        </Router>
    </div>
  )
}

export default RoutesCreated