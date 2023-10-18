import React from 'react';
import Image from 'next/image';
import { whisky } from '@/constants/whisky';
import { StarRating } from '@/components';

interface ProductCardProps {
  whisky: whisky;
}

const ProductCard: React.FC<ProductCardProps> = ({ whisky }) => {
  return (
    <li className="shadow-xl rounded-lg hover:scale-105 duration-200">
      <button className="w-full h-full">
        <div className="py-2 h-[200px] bg-radial-gradient rounded-t-lg">
          <div className="w-full h-full relative">
            <Image
              className="object-contain"
              src={`/images/whisky${whisky.imgPath}`}
              alt={whisky.name}
              fill
              sizes="300px"
            />
          </div>
        </div>
        <div className="h-[50px] pt-3 px-3 text-sm">
          <p className="truncate-2-lines">{whisky.name}</p>
        </div>
        <div className="h-[35px] flex justify-center items-center">
          <StarRating rating={whisky.rating} />
          <span className="text-sm font-thin">({whisky.rating})</span>
        </div>
        <div className="h-[50px] flex justify-center items-center border-2 border-black rounded-lg">
          <p>${whisky.price}</p>
        </div>
      </button>
    </li>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
