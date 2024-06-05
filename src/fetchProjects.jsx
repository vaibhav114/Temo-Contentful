import { createClient } from 'contentful'
import { useEffect } from 'react';
import { useState } from 'react';

const client  = createClient({
    space:import.meta.env.VITE_SPACE_ID,
    environment:'master',
    accessToken:import.meta.env.VITE_ACCESS_TOKEN
})


export const useFetchProjects =()=>{

    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([])

    const fetchData = async()=>{
        try {
            const response = await client.getEntries({content_type: 'projects'})
            setLoading(false)
            const projects = response.items.map((itm)=>{
                const { title ,url } = itm.fields
                const image = itm.fields?.image?.fields?.file?.url

                return {
                    title ,url ,image
                }
            })
            setProjects(projects)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {loading ,projects}
}