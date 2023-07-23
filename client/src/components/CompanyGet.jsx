import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react"

export default function CompanyGet() {

  const getreq = async () => {
    const TOKEN = Cookies.get('accesstoken');
    const data = await axios.get('http://3.139.87.105/api/api/companies/', {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    console.log(data);
  }
  useEffect(() => {

    getreq();
  }, [])
  return (<>
  </>)
}