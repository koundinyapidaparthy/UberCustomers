import React from "react"
import ReactTable from "../components/Table";
import { useQuery } from "@apollo/client";
import {WALLETQUERY} from "../queries";
import {AppLevelContext} from "../Context/CreateContext"

const tableHeaders=[
    {
        label:"Id"
    },
    
    {
        label:"Pick Up"
    },
    {
        label:"Drop"
    },
    {
        label:"Amount Spent On This Ride"
    },
    {
        label:"Method of payment"
    },
]


function RidesTaken() {
  const contextData=React.useContext(AppLevelContext);
  const username=contextData.userDetails.username;
  const [rows,setRows]=React.useState([]);
  const {loading,error}=useQuery(WALLETQUERY,{
    variables:{
      username:username,
    },
    onCompleted:(data)=>{
      let previousRides=[];
      if(data.wallet)
        previousRides=data.wallet.map(({__typename,username,...rest})=>{return {...rest}})

      setRows(previousRides)
    }
})

  return (
    <ReactTable rows={rows} loading={loading} tableHeaders={tableHeaders} />
  );
}

export default RidesTaken