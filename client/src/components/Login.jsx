import { useState } from 'react';
import './Login.scss'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Login()
{
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
    const [info, setinfo] = useState({
        email: "",
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


    const sendrequest = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://18.222.166.42/api/token/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: info.user,
            password: info.password,
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to login");
        }
        const data = await response.json();
        Cookies.set('accesstoken', `${data.access}`, { expires: 7 });
        Cookies.set('refreshtoken', `${data.refresh}`, { expires: 7 });
        if(true){
          navigate('/hello');
        }
      } catch (err) {
        console.log(err);
      }
    };
    

    return <>
    <div className="main_login">
        <div className="wrapper">
            <div className="form">
                    <h1>CorpoShare</h1>

                    <div className="from_wrapper">
                    <h2>Sign In</h2>
                    <form onSubmit={sendrequest}>
                      <div className="input_wrapper">
                          <label htmlFor="user">Username</label><br />
                          <input className='input_box' type="text"  name="user" id='user' required  onChange={handlechange} />
                      </div>
                      <div className="input_wrapper">
                      <label htmlFor="pass">Password</label><br />
                      <div className="fake_box">
                        <input className='input_inside' type={show ? "text" :"password"} required  name="password" id='pass' onChange={handlechange} />
                        <div className="text" onClick={e=>{setshow(cur=>!cur)}}>{show ? <AiFillEyeInvisible /> : <AiFillEye /> }</div>
                    </div>
                      </div>
                      <input className='submit' type="submit" value="Sign In" />
                    </form>
                    <p>Forgot your password? <span>Reset Password</span></p>
                    <p>Don't have and Account? <span>Create Account</span></p>
                    </div>
            </div>
            
            <div className="img">
                <div className="card">
                    <div className="strip"></div>
                    <div className="strip-two"></div>
                    <div className="strip-three"><div className="circle"></div></div>
                </div>
                <div className="semi"></div>
                <div className="semi-img"></div>
            </div>
        </div>
    </div>

    </>

}