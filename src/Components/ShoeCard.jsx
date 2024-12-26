import React from 'react';

const ShoeCard = ({ img, changeBigShoe, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== img.bigShoe) { 
        changeBigShoe(img.bigShoe); 
      }
    };
  
    return (
      <div
        onClick={handleClick}
        className={`border-2 rounded-xl ${
          bigShoeImg === img.bigShoe ? 'border-coral-red' : 'border-transparent'
        } cursor-pointer max-sm:flex-1`}
      >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
          <img
            draggable={false}
            className="object-contain"
            src={img.thumbnail}
            alt="shoe"
            height={104}
            width={127}
          />
        </div>
      </div>
    );
  };

export default ShoeCard;
