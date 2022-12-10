import React, {useEffect, useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ApiService} from "./API/ApiService";
import MyButton from "./components/MyButton";

interface IUser {
  username: string,
  id: number,
  email: string,
}


function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const [user, setUser] = useState<IUser>({username:"", email:"", id:-1})

  const getUser = async () => {
    const user = await ApiService.getUser(token)
    setUser(user)
  }


  useEffect(()=>{
    if(token && !user.username.length){
      getUser()
    }
  }, [token, getUser, user])


  const isAuth = useMemo(()=>{
    return !!user.username.length;
  }, [user])




  return (
      <div className="App">
          <h1>Hello, Hackathon!</h1>
      </div>
  );
}

export default App;
