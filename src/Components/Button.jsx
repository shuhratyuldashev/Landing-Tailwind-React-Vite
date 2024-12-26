import React from 'react'

const Button = ({ label, iconURL, bg, border, color, fullWidth }) => {
  return (
    <button className={`hover:scale-110 duration-300 flex justify-center items-center
         gap-2 py-4 px-8 border font-montserrat text-lg leading-none rounded-full ${fullWidth && 'w-full'}
         ${bg ? `${bg} ${border} ${color}` : `bg-coral-red text-white border-coral-red`}`}>
        {label}
      {iconURL && <img draggable={false} src={iconURL} alt="icon" className='ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button