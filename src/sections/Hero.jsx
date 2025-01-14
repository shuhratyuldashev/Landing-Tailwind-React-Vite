import React, { useState } from 'react';
import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../Constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../Components/ShoeCard';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
      <p className="text-xl font-mono text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin font-bold text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red mt-5'>Nike</span> Shoes
  
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex flex-wrap justify-start items-start w-full mt-20 gap-16">
          {statistics.map((state) => (
            <div key={state.label}>
              <h2 className="text-4xl font-palanquin font-bold">{state.value}</h2>
              <p className="leading-7 font-montserrat text-slate-gray">{state.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          draggable={false}
          className="object-contain z-10"
          width={610}
          height={500}
          src={bigShoeImg}
          alt="Big shoe"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                img={shoe}
                changeBigShoe={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
