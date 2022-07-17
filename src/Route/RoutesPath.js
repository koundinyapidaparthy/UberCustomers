import { lazy } from "react";
import UserLogin from "../Log/Login";
import Logout from "../Log/Logout";
const ApplyRide=lazy(()=>import("../ApplyRide/ApplyRide"));
const Rides=lazy(()=>import("../Rides/RidesTaken"));
const Wallet =lazy(()=>import("../Wallet/wallet"))
const routesPath=[
    {
        component:UserLogin,
        path:"/UberCustomers",
        exact:true,
        forLogin:true,
    },
    {
        component:UserLogin,
        path:"/UberCustomers/login",
        exact:true,
        forLogin:true,
    },
    {
        component:ApplyRide,
        path:"/UberCustomers/letsgo",
        exact:true
    },
    {
        component:Rides,
        path:"/UberCustomers/rides",
        exact:true
    },
    {
        component:Logout,
        path:"/UberCustomers/logout",
        exact:true
    },
    {
        component:Wallet,
        path:"/UberCustomers/wallet",
        exact:true
    },
]
export default routesPath