import { useState } from "react";
import { useNavigate } from "react-router";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cookies from "js-cookie";
import ip from "./ip";
import jwt_decode from 'jwt-decode';

export default function Register() {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const [info, setinfo] = useState({
    email: "oom123@gmail.com",
    name: "Swarup",
    password: "oom1234",
    password2: "oom1234",
  });

  const memberinfo = (e) => {
    setinfo((info) => ({
      ...info,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://${ip}/api/user/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: info.email,
          name: info.name,
          password: info.password,
          password2: info.password2,
        }),
      });

      const data = await response.json();
      if (data.token) {
        const accessToken = data.token.access;
        const refreshToken = data.token.refresh;
        const decodedAccessToken = jwt_decode(accessToken);
        const decodedRefreshToken = jwt_decode(refreshToken);

        console.log("Decoded Access Token:", decodedAccessToken);
        console.log("Decoded Refresh Token:", decodedRefreshToken);

        Cookies.set("accesstoken", accessToken);
        Cookies.set("refreshtoken", refreshToken);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
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
              <p>Join us here for opportunities</p>
            </div>
            <div className="card">
              <FaQuoteLeft className="quotes_icon" />
              <p>
                I'm impressed with the results I've seen since starting to use
                this product. I began receiving clients and projects in the
                first week.
              </p>
            </div>
          </div>

          <div className="login_details_">
            <form onSubmit={handleChange} className="form_details">
              <div className="input_wrapper">
                <label htmlFor="name">Company Name</label>
                <br />
                <input
                  title="name of the Person"
                  placeholder="Company Name"
                  className="input_box"
                  value={info.name}
                  type="name"
                  name="name"
                  id="name"
                  required
                  onChange={memberinfo}
                />
              </div>
              <div className="input_wrapper">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  title="Email of the Person"
                  placeholder="info@example.com"
                  className="input_box"
                  value={info.email}
                  type="email"
                  name="email"
                  id="email"
                  required
                  onChange={memberinfo}
                />
              </div>
              <div className="input_wrapper">
                <label htmlFor="pass">Password</label>
                <br />
                <div className="fake_box">
                  <input
                    className="input_inside"
                    placeholder="password"
                    type={show ? "text" : "password"}
                    value={info.password}
                    required
                    name="password"
                    title="Password"
                    id="pass"
                    onChange={memberinfo}
                  />
                  <div
                    className="text"
                    onClick={(e) => {
                      setshow((cur) => !cur);
                    }}
                  >
                    {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </div>
                </div>
              </div>
              <div className="input_wrapper">
                <label htmlFor="pass">Re-Password</label>
                <br />
                <div className="fake_box">
                  <input
                    className="input_inside"
                    placeholder="Rewrite Password"
                    type={show ? "text" : "password"}
                    value={info.password2}
                    required
                    name="password2"
                    title="Re-Password of the Person"
                    id="password2"
                    onChange={memberinfo}
                  />
                  <div
                    className="text"
                    onClick={(e) => {
                      setshow((cur) => !cur);
                    }}
                  >
                    {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </div>
                </div>
              </div>
              <input
                className="submit"
                title="Submit Button"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p className="alternate_acc_route">
              Already have an account?{" "}
              <Link className="link" to="/">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
