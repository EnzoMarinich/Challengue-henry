
import React from 'react'
import Form from '@/app/components/Form'
import axios from 'axios'
import { Button } from '@/app/components/Button'

export default async function Page() {
    

  const rstas = await axios("https://challengue-henry-dv5kt6186-enzomarinich.vercel.app/app/api/answer")

  
  const data = (await (axios("https://challengue-henry-dv5kt6186-enzomarinich.vercel.app/app/api/form"))).data.items


  return (
    <div className='relative h-full flex flex-col items-center gap-9 p-20'>
        <Button className="absolute rounded-md top-7 left-10 bg-black font-semibold text-orange-400 px-16 py-1 hover:bg-orange-400 hover:text-black transition-all" route="/" label="Atras" />
        <h1 className='text-3xl text-orange-500 font-semibold'>Respuestas</h1>
        {rstas?.data?.data?.map(e=> <Form key={e.name} data={data} rsta={e} edit={true}/>)}
    </div>
  )
}
