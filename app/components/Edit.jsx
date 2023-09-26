"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Edit({id}) {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const rsta = await axios(`/api/answer/${id}`);
            setData(rsta.data);
        };

        fetchData();
    }, [id]);

    console.log(data);

  return (
    <div>Edit</div>
  )
}
