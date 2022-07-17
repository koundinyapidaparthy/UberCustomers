import React from "react"
import ReactTable from "../components/Table";
import { useQuery } from "@apollo/client";
import {PREVIOUSRIDES} from "../queries";
import {AppLevelContext} from "../Context/CreateContext"

const tableHeaders=[
    // {
    //     label:"Driver Details"
    // },
    {
        label:"Id"
    },
    {
        label:"Amount paid"
    },
    {
        label:"Pick Up"
    },
    {
        label:"Drop"
    },
    {
        label:"Duration"
    },
    {
        label:"Date"
    },
    {
        label:"feedback"
    },
    {
        label:"feedback_Comments"
    },
]


function RidesTaken() {
  const contextData=React.useContext(AppLevelContext);
  const username=contextData.userDetails.username;
  const [rows,setRows]=React.useState([]);
  const {loading,error}=useQuery(PREVIOUSRIDES,{
    variables:{
      username:username,
    },
    onCompleted:(data)=>{
      let previousRides=[];
      if(data.all_user_ride_details)
        previousRides=data.all_user_ride_details.map(({__typename,username,...rest})=>{return {...rest}})

      setRows(previousRides)
    }
})

  return (
    <ReactTable rows={rows} loading={loading} tableHeaders={tableHeaders} />
  );
}

export default RidesTaken