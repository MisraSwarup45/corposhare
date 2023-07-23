import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";
import ip from "./ip";

export default function CompanyPost() {
  const [userid, setuserid] = useState();
  const navigate = useNavigate();

  const [info, setinfo] = useState({
    founder: "",
    description: "",
    services_offered: "",
    logo: "",
    year_established: "",
    employees: "",
    valuation: "",
    user: ""
  });

  useEffect(() => {
    const TOKEN = Cookies.get('accesstoken');
    if (!TOKEN) {
      navigate('/login'); // Redirect to login page if not logged in
      return;
    }
    var decoded = jwt_decode(TOKEN);
    setuserid(decoded.user_id);
  }, []);

  async function req_post(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://${ip}/api/v1/companies/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          founder: info.founder,
          description: info.description,
          services_offered: info.services_offered,
          logo: "https://picsum.photos/200/300",
          year_established: info.year_established,
          employees: info.employees,
          valuation: info.valuation,
          user: userid,
        })
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  const handlechange = (e) => {
    setinfo((info) => ({
      ...info,
      [e.target.name]: e.target.name === "employees" ? parseInt(e.target.value) : e.target.value,
    }));
  }

  return (
    <>
      <form onSubmit={e => req_post(e)}>
        <label htmlFor="founder">Founder</label>
        <input type="text" name="founder" onChange={handlechange} id="founder" />
        <br />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" onChange={handlechange} id="description" />
        <br />
        <label htmlFor="services_offered">Services Offered</label>
        <input type="text" name="services_offered" id="services_offered" onChange={handlechange} />
        <br />
        <label htmlFor="logo">Logo</label>
        <input type="text" name="logo" id="logo" onChange={handlechange} />
        <br />
        <label htmlFor="year_established">Year Established</label>
        <input type="text" name="year_established" id="year_established" onChange={handlechange} />
        <br />
        <label htmlFor="employees">Employees</label>
        <input type="number" name="employees" id="employees" onChange={handlechange} />
        <br />
        <label htmlFor="valuation">Valuation</label>
        <input type="text" name="valuation" id="valuation" onChange={handlechange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}