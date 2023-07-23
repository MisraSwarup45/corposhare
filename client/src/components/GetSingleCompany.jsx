import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react"
export default function GetSingleCompany(){

    const getreq = async()=>{
        const TOKEN = Cookies.get('accesstoken');
        const data = await axios.get('http://18.222.166.42/api/api/company/1', {
             headers: {
               Authorization: `Bearer ${TOKEN}`,
               'Content-Type': 'application/json'
             }
           })
           console.log(data);
    }
    useEffect(()=>{

        getreq();
    },[])
    return (<>
    </>)
}