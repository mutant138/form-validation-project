import React , { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from './components/Users/UsersList'

function App() {
  const [usersList , setUsersList] = useState([])
  const addUserChangeHandler = (uName , uAge)=>{
    setUsersList((previosList)=>{
      return [...previosList , {name : uName , age: uAge , id : Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser = {addUserChangeHandler} />
      <UsersList users={usersList} />
    </div>
    
  );
}

export default App;
