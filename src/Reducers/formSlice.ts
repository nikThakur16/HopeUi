import { formState } from './formSlice';
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface formState{
    FirstName:string,
    lastname:string,
    password:string,
    confirmPassword:string,
    email:string
    phone:number


}

export const initialState:formState={
    FirstName:"",
    lastname:"",
    password:"",
    confirmPassword:"",
    email:"",
    phone:0


}