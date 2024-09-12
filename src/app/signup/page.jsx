"use client"
import { useEffect, useState } from "react"
import axios from "axios"

import Link from "next/link"
import { toast } from "react-hot-toast";
function page() {

  const [load,setLoad]=useState('')
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
})
  useEffect(()=>{
  console.log('inside useEffect');
},[load])
  
  const onSignup=async ()=>{
   // setLoad('isLoading'); //to call useEffect again
   console.log('inside handleFun');
   try{
    const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            toast.success("SignUp successfuly");
   }
   catch(error){
    console.log('error in signup--',error);
    toast.error('error in signup');

   }
  }

  return (
    <>

<div className="bg-blue-950 flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading ? "Processing" : "Signup"}</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            
            <button
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</button>
            <Link href="/login">Visit login page</Link>
        </div>
      </>
  )
}

export default page