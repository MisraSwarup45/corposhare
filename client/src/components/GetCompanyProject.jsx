import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react"
export default function GetCompanyProject(){

    const getreq = async()=>{
        const TOKEN = Cookies.get('accesstoken');
        const data = await axios.get('http://18.222.166.42/api/api/project/1', {
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