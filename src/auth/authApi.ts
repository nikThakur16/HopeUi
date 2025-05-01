

export interface SignInCred{
    email:string,
    password:string,

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

// authApi.ts
export async function fetchUsers(token: string,id:string) {
  const res = await fetch(`https://reqres.in/api/users/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      "x-api-key": "reqres-free-v1" 
    }
  });

  if (!res.ok) throw new Error('Failed to fetch users bro!');
  return res.json(); 
}
export async function LoginApi(creds: SignInCred) {
  console.log("Login Request Data:", creds);
  const res = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(creds),
  });

  const data = await res.json();
  console.log(data);

  if (!res.ok) {
    throw new Error(data.error || "Login failed");
  }

  return data; // contains { token: "..." ,id.....}
}

export async function SignUpApi(creds: SignUpCred) {
    const res = await fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: { 'x-api-key': 'reqres-free-v1','Content-Type': 'application/json'},
      body: JSON.stringify({
        email:creds.email,
        password:creds.password

      }
       
      ),
    });
  
    const data = await res.json();
    console.log(data);
  
    if (!res.ok) {
      throw new Error(data.error || 'Registration failed');
    }
  
    return data; 
  }
  