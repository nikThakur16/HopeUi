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

interface AuthState{
    token:string |null,
    user:any,
    loading:boolean,
    error:string|null
}

export const initialState1:formState={
    FirstName:"",
    lastname:"",
    password:"",
    confirmPassword:"",
    email:"",
    phone:0




}



const FormSlice = createSlice({
    name: 'form',
    initialState:initialState1,
    reducers: {
      updateForm: (state, action: PayloadAction<Partial<formState>>) => {
        return { ...state, ...action.payload };
      },
      resetForm: () => initialState,
    },
  });
  
  
  export const { updateForm, resetForm } = FormSlice.actions;
  export default FormSlice.reducer;
  