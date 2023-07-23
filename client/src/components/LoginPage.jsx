import { useEffect, useState } from 'react';
import './LoginPage.scss';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaQuoteLeft } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from './Footer';
import jwt_decode from 'jwt-decode';
import ip from './ip';

export default function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [passmsg, setPassmsg] = useState("");

  const [info, setInfo] = useState({
    password: "oom1234",
    email: "oom123@gmail.com"
  });

  const handlechange = (e) => {
    setInfo((info) => ({
      ...info,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (info.password) {
      const strengthChecks = {
        length: 0,
        hasUpperCase: false,
        hasLowerCase: false,
        hasDigit: false,
        hasSpecialChar: false,
      };
      strengthChecks.length = info.password.length >= 8 ? true : false;
      strengthChecks.hasUpperCase = /[A-Z]+/.test(info.password);
      strengthChecks.hasLowerCase = /[a-z]+/.test(info.password);
      strengthChecks.hasDigit = /[0-9]+/.test(info.password);
      strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(info.password);
      let verifiedList = Object.values(strengthChecks).filter((value) => value);
      let strength =
        verifiedList.length >= 4
          ? "Strong"
          : verifiedList.length >= 3
            ? "Medium"
            : "Weak";
      setPassmsg(strength);
    } else {
      setPassmsg("");
    }
  }, [info.password]);

  const sendrequest = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://${ip}/api/v1/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: info.email,
          password: info.password,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const data = await response.json();
      const { access, refresh } = data.token;
      const decodedAccessToken = jwt_decode(access);
      const decodedRefreshToken = jwt_decode(refresh);

      console.log("Decoded Access Token:", decodedAccessToken);
      console.log("Decoded Refresh Token:", decodedRefreshToken);

      Cookies.set("accesstoken", access, { expires: 7 });
      Cookies.set("refreshtoken", refresh, { expires: 7 });

      // Set a timeout to refresh the access token before it expires
      const accessTokenExpiration = decodedAccessToken.exp * 1000; // Convert expiration time to milliseconds
      const tokenRefreshTimeout = accessTokenExpiration - Date.now() - 60000; // Refresh 1 minute before expiration
      setTimeout(refreshAccessToken, tokenRefreshTimeout);

      // Make API requests using the access token in the header
    

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const refreshAccessToken = async () => {
    try {
      const refreshToken = Cookies.get("refreshtoken");

      const response = await fetch(`http://${ip}/api/token/refresh/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`, // Send the refresh token as a bearer token in the header
        },
      });

      if (!response.ok) {
        throw new Error("Failed to refresh access token");
      }

      const data = await response.json();
      const { access } = data.token;
      const decodedAccessToken = jwt_decode(access);

      console.log("New Decoded Access Token:", decodedAccessToken);

      // Update the access token in the cookies
      Cookies.set("accesstoken", access, { expires: 7 });

      // Schedule the next access token refresh
      const accessTokenExpiration = decodedAccessToken.exp * 1000;
      const tokenRefreshTimeout = accessTokenExpiration - Date.now() - 60000;
      setTimeout(refreshAccessToken, tokenRefreshTimeout);
    } catch (err) {
      console.log(err);
      // Handle any errors that occur during the refresh token request
    }
  };



  return (
    <>
      <Navbar />
      <div className="main_login_page">
        <div className="login_wrapper">
          <div className="login_art_">
            <div className="icon">
              <div className="circle"></div>
            </div>
            <div className="text">
              <h2>Let us help you run your freelance business.</h2>
              <p>Our registration process is quick and easy, taking no more than 10 minutes to complete.</p>
            </div>
            <div className="card">
              <FaQuoteLeft className="quotes_icon" />
              <p>I'm impressed with the results l've seen since starting to use this product, I begin receiving
                clients and projects in the first week.</p>
            </div>
          </div>
          <div className="login_details_">
            <form onSubmit={sendrequest}
              className="form_details">
              <h1>Get started</h1>
              <p>Login to your account now</p>
              <div className="input_wrapper">
                <div className="text_label"><label htmlFor="user">email</label></div>
                <input
                  title="email of the Person"
                  placeholder='info@example.com'
                  className='input_box'
                  type="text"
                  name="email"
                  id='email'
                  value={info.email}
                  required
                  onChange={handlechange}
                />
              </div>
              <div className="input_wrapper">
                <div className="text_label"><label htmlFor="pass">Password</label></div>
                <div className="fake_box">
                  <input
                    placeholder='password'
                    type={show ? "text" : "password"}
                    required
                    name="password"
                    title="Password of the Person"
                    value={info.password}
                    id='pass'
                    onChange={handlechange}
                  />
                </div>
                <p className='passchecker' style={{ color: passmsg === "Strong" ? "green" : passmsg === "Medium" ? "orange" : passmsg === "Weak" ? "red" : "white" }}>{passmsg}</p>
              </div>
              <input className='submit' title="Submit Button" type="submit" value="Login" />
            </form>
            <p className='alternate_acc_route'>Don't have an account? <Link className='link' to='/signup'>Register</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}