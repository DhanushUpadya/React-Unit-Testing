import Form from './components/Form';
import React,{useState} from "react";

export const validateInput = (str = "") => str.includes("@");
function App() {

  const adminUser ={
    email:"dhanushupadya@gmail.com",
    password:"dhanush123"
  }

  const [user,setUser]=useState({
    name:"",email:""
  });
  const [error,setError] =  useState("");

  const Login  =(details) =>{
    console.log(details);

    if(details.email==adminUser.email && details.password==adminUser.password){
      console.log("Logged in");
      setUser({
        name:details.name,
        email:details.email
      });
    } else {
      setError("Details do not match");
      console.log("details do not match");
    }
  }

  const Logout = () =>{
    console.log("Logout");
    setUser({
      name:"",
      email:""
    });
  }
  return (
    <>
<div className="App">
{(user.email != "")? (
  <div className="welcome">
    <h2>Welcome, <span>{user.name}</span></h2>
    <button onClick={Logout}>Logout</button>
  </div>
) : (
 
  <Form Login={Login} error={error} />

)}
</div>
    </>
  );
}

export default App;
