import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Contact() {
  const [getData, setgetData] = useState([])
  async function GetTrending(){
    let {data}= await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-08-27&sortBy=publishedAt&apiKey=d370e0e550374ccd913d55e9cbb2439c")
    console.log(data.articles);
    setgetData(data.articles)
  }
  useEffect(()=>{
    GetTrending()
  },[])
  return <>
  <div className="container">
    <div className="row">
      {getData.map((Data,index)=> <div key={index} className='col-md-3'>
        <h2 className='h5'>{Data.author}</h2>
      </div>)}
    </div>
  </div>
  </>
}
