import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(()=> {
    //     fetch('https://api.github.com/users/aniket-sharma10')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // }, [])
    
    return (
        <div className='text-center m-4 p-4 bg-[#1a1a1a] text-white text-3xl'>
            Github followers: {data.followers}
        </div>       
    )
}

export default Github;
export const GitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/aniket-sharma10')
    return response.json()
}
