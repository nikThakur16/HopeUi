import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { JSX } from "react";


export function ProtectedRoute({children}:{children:JSX.Element}){

    const token =useAppSelector ((state)=>state.auth.token);
    return token? children:<Navigate to="/"  replace/>
}