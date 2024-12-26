import React from 'react';
import { offer, shoe8 } from '../assets/images';
import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffers = () => {
  return (
    <section id='special-offers' className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img draggable={false} src={offer} alt="Special offer" width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin font-bold text-4xl capitalize">
          <span className='text-coral-red'>Special </span> 
          Offer 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us a
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptio
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn more" bg='bg-white' border='border-slate-gray' color='text-slate-gray'/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers;