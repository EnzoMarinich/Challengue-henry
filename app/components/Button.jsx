"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export const Button = ({route, label , className}) => {
    
    const router = useRouter

  return (
    <Link className={className} href={route}>
        {label}
    </Link>
  )
}
