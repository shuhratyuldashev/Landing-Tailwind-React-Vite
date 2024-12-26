import React from 'react'

const ServiceCard = ({ imgURL, label, subtext}) => {
  return (
    <div className='hover:shadow-3xl hover:scale-105 duration-500 flex-1 sm:w[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
            <img draggable={false} src={imgURL} alt={label} width={24} height={24}/>
        </div>
        <h2 className='mt-5 font-palanquin leading-normal font-bold'>{label}</h2>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard