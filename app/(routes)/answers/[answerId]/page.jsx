"use client"
import { Button } from '@/app/components/Button';
import Form from '@/app/components/Form';
import axios from 'axios'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Page() {

    const params = useParams()
    const {answerId} = params

    const [data, setData] = useState(null);
    const [rsta, setRsta] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const rsta = await axios.post(`https://challengue-henry.vercel.app/api/answer${answerId}`, {answerId});
            const newdata = (await (axios("https://challengue-henry.vercel.app/api/form"))).data.items

            setData(newdata);
            setRsta(rsta.data)
        };

        fetchData();
    }, [answerId]);

    if(!data){
        return (
            <h1>CARGANDO...</h1>
        )
    }

    if(data){

        

        return (
            <div className='relative h-screen flex flex-col items-center pt-20 gap-10'>
                <Button className="absolute rounded-md top-7 left-10 bg-black font-semibold text-orange-400 px-16 py-1 hover:bg-orange-400 hover:text-black transition-all" route="/" label="Atras" />
                <h1 className='text-2xl text-orange-500 font-semibold'>Hola {rsta.data.full_name}, aquí puede editar tu encuesta!</h1>
                <Form  rsta={rsta.data} data={data}/>
            </div>
        )
    }
}