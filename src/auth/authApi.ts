import axios from "axios"

export interface SignInCred{
    email:string,
    password:string
}

export interface SignUpCred{
    firstName: string,
    lastName: string,
    email: string,
    phoneNo: number,
    password: string,
    confirmPassword: string,
    agreeTerms: boolean,
    
}

export async function LoginApi(creds:SignInCred) {

    const res =await fetch('https://reqres.in/api/login',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(creds)
    });

    if(!res) throw new Error("invalid");
    return res.json();
    
}
export async function SignUpApi(creds: any) {
    const res = await fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: creds.email,
        password: creds.password,
      }),
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.error || 'Registration failed');
    }
  
    return data; 
  }
  