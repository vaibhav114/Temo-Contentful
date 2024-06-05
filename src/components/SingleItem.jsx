import React from 'react'
const SingleItem = ({props}) => {
  return (
    <a href={props.url} target='_blank'>
    <div className='hover:scale-105 hover:delay-100 hover:ease-in-out'>
        <div className='border-2'>
            <div className='flex justify-center pt-3 pb-3'>
                <img src={props.image} alt="image" className='w-80 h-64' />
            </div>
            <h1 className='mt-6 flex justify-center text-xl'>{props.title}</h1>
        </div>
    </div>
    </a>
  )
}

export default SingleItem