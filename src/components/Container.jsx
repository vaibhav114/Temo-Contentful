import React from 'react'
import { projects } from '../data'
import SingleItem from './SingleItem'
import { useFetchProjects } from '../fetchProjects'
const Container = () => {
    const {loading ,projects }= useFetchProjects();
  return (
    <div className='mt-52 '>
         <div className='flex justify-center pt-12 pb-12 text-4xl tracking-widest font-semibold'> 
            <h1>Projects</h1>
        </div>
    <div className='ml-64 pb-32'>
        <div className='grid grid-cols-3 gap-10'>
            {
                projects.map((item ,index)=>{
                    return <SingleItem key={index} props={item} />
                })
            }
        </div>
    </div>
</div>
  )
}

export default Container