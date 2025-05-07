export interface SignInCred {
  email: string;
  password: string;
}

export interface SignUpCred {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: number;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

const BASE_URL = "https://reqres.in/api";




//login

export async function LoginApi(creds: SignInCred) {
  console.log("Login Request Data:", creds);
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "x-api-key": "reqres-free-v1",
      "Content-Type": "application/json",
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

//signUp

// src/reducers/APIs/index.ts
export async function SignUpApi(creds: SignUpCred) {

    // If email doesn't exist, proceed with registration
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: creds.email,
        password: creds.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Registration failed");
    }

    return data;
  } 


//Getting a single user
export async function fetchUsers(token: string, id: string) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "x-api-key": "reqres-free-v1",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch users ");
  return res.json();
}




//Getting A list of users

export async function fetchUsersList(token: string) {
  const res = await fetch(`${BASE_URL}/users?page=2`, {
    method: "GET",
    headers: {
     'Authorization': `Bearer ${token}`,
      "x-api-key": "reqres-free-v1",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch users Table");
  return res.json();
}
