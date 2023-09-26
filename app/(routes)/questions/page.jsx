
"use client"
import React, { useEffect, useState } from 'react'
import Form from '@/app/components/Form'
import axios from 'axios'
import { Button } from '@/app/components/Button'

export default  function Home() {

  const [data, setData] = useState(null)
  
  
  useEffect(()=>{
    const fetchData = async () => {
      
    let res = (await (axios("https://challengue-henry-dv5kt6186-enzomarinich.vercel.app/api/form"))).data.items

    setData(res)
  }

  fetchData()
  }, [])


  return (
    <div className='p-10 relative  h-screen flex flex-col items-center justify-center'>
        <Button className="absolute rounded-md top-7 left-10 bg-black font-semibold text-orange-400 px-16 py-1 hover:bg-orange-400 hover:text-black transition-all" route="/" label="Atras"/>
        <Form data={data}/>
    </div>
  )
}
