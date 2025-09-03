import React from 'react'
import { useParams, useLocation } from "react-router";

const DetailsPage = () => {
  const { name, id } = useParams();
  const location = useLocation();
  const service = location.state?.service;

  console.log(service)
  return (
    <div className='mx-auto w-9/11'> 
      <div className='h-140'>
        <img src={service.image} alt="" className='w-full h-full object-cover' />
      </div>
      <h1 className='font-bold text-4xl mt-8'>{service.title}</h1>
      <p className='my-4'>{service.description}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12"></div>
    </div>
  )
}

export default DetailsPage