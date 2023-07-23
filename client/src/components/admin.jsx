import { useState } from 'react';
import './Login.css'
import axios from 'axios'
export default function Login()
{
    const [info, setinfo] = useState({
        password: "",
        user:""
     
      });
      const handlechange = (e) => {
        setinfo((info) => ({
          ...info,
          [e.target.name]: e.target.value,
        }));
        console.log(info);
    }

async function sendrequest(e)
{
    e.preventDefault();
        const data = await axios.post("http://3.145.18.247/token/login",
        {
          password : info.password,
          username : info.user
        })
        console.log(data);
}

    return <>
        <form onSubmit={e=>sendrequest(e)}>
        <input type="password"  name="password" onChange={handlechange} />password
        <input type="text"  name="user" onChange={handlechange} />Username
        <input type="submit" value="submit" />
        </form>
    </>

}