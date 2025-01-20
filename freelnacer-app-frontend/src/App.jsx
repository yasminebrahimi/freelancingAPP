import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth"; 


function App() {
  return <Routes>
    <Route path="/auth" element={<Auth />}/>     
  </Routes>
}



export default App; 


//auth 
//Task #1: auth user via OTP : one-time-password 
//1. form => getOTP => input + button => phoneNumber => send OTP
//2. form => checkOTP => request => (otp, phoneNumber)

//request => 
// 1. axios (useState, useEffect)
//2. useFetch (data, loading, error)
//3. react-query => redux alternative (remote states), fetch (get), mutate (post)
