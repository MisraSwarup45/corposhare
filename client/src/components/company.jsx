import { useEffect } from 'react';
import axios from 'axios';

export default function Company() {


  const sendtoken = async () => {

    const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMzY5NDM3LCJqdGkiOiJkMjZlODU4Y2FkOWU0ZDc1YmM1N2M2NGRjY2U5N2ExYyIsInVzZXJfaWQiOjJ9.bKKoHYYmEh2lkpIBpc-ueRh3TKatZbrTGkKuDbO3eVI';
    const data = await axios.get('http://18.116.90.14/api/api/user/', {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    console.log(data);
  }
  useEffect(() => {
    sendtoken();
  }, [])
  return (<>

  </>)
}




