"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Form = (props) => {

    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState(props.rsta? props.rsta : {
        full_name : "",
        phone_number : "",
        start_date : "",
        preferred_language: "",
        how_found : "",
        newsletter_subscription: false
    })


    const onChange = (e)=>{
        if(e.target.type === "checkbox"){
            setForm({...form, newsletter_subscription: !form.newsletter_subscription})
        } else {
            setForm({...form, [e.target.name] : e.target.value})
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setLoading(true)

        try {
            if(props.rsta) {
                const edit = await axios.put(`https://challengue-henry-dv5kt6186-enzomarinich.vercel.app/api/answer/${props.rsta.id}`, {form})
                alert("editado exitosamente")
            } else {
                const rsta = await axios.post("https://challengue-henry-dv5kt6186-enzomarinich.vercel.app/api/answer", {form})
                alert("Respuesta guardada exitosamente")
                router.push("/answers")
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }


    const handleEdit = (e)=>{
        e.preventDefault()
        router.push(`/answers/${props.rsta.id}`)
    }

    if(!props.data){
        return (
            <div className="flex flex-col gap-3 items-center w-3/5 border border-black form">
                <h1>Form</h1>
                <span>Cargando...</span>
            </div>
        )
    }


  return (
    <div className="flex flex-col gap-3 items-center max-w-lg w-3/5 border border-black form py-7">
        <form className='flex flex-col gap-4 font-semibold'>
            {props.data?.map(e=>{
                if(e.type == "select") {
                    return (
                    <div key={e.name} className='flex gap-2'>
                        <label htmlFor={e.label}>{e.label}</label>
                        <select disabled={props.edit} className='text-black' name={e.name}  onChange={(e)=>onChange(e)}>
                            {e.options.map((op) => <option  value={op.value} key={op.value}>{op.label}</option>)}
                        </select>
                    </div>
                )
                }
                if(e.type == "radio") {
                    return (
                        <div key={e.name}>
                            <label htmlFor={e.label}>{e.label}</label>
                            {e.options.map(op=>{
                                return (
                                    <div key={op.value}>
                                        <input disabled={props.edit} className='text-black' onChange={(e)=>onChange(e)} type={e.type} value={op.value} name={e.name} id={op.value} />
                                        <label htmlFor={op.value}>{op.label}</label>
                                    </div>
                                )
                            } )}
                        </div>
                    )
                }
                if(e.type == "submit") return <button className={`  ${loading? "cursor-not-allowed focus:outline-none disabled:opacity-75" : "hover:bg-white hover:text-black py-1 rounded-md bg-transparent text-white border border-white transition-all"}`} onClick={props.edit? (e)=>handleEdit(e) :(e)=>handleSubmit(e)}  type={e.type}> {props.rsta? "Editar" : e.label}</button>
                else {
                    return (
                        <div className='flex gap-2 items-center' key={e.name}>
                            <label htmlFor="">{e.label}</label>
                            <input disabled={props.edit} onChange={(e)=>onChange(e)} className='p-1 border border-black text-black' type={e.type} name={e.name} value={form[e.name]} />
                        </div>
                    )
                }
            })}
        </form>
    </div>
  )
}

export default Form