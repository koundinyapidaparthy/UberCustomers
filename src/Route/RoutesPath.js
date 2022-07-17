import { lazy } from "react";
import UserLogin from "../Log/Login";
import Logout from "../Log/Logout";
const ApplyRide=lazy(()=>import("../ApplyRide/ApplyRide"));
const Rides=lazy(()=>import("../Rides/RidesTaken"));
const Wallet =lazy(()=>import("../Wallet/wallet"))
const routesPath=[
    {
        component:UserLogin,
        path:"/",
        exact:true,
        forLogin:true,
    },
    {
        component:UserLogin,
        path:"/login",
        exact:true,
        forLogin:true,
    },
    {
        component:ApplyRide,
        path:"/letsgo",
        exact:true
    },
    {
        component:Rides,
        path:"/rides",
        exact:true
    },
    {
        component:Logout,
        path:"/logout",
        exact:true
    },
    {
        component:Wallet,
        path:"/wallet",
        exact:true
    },
]
export default routesPath