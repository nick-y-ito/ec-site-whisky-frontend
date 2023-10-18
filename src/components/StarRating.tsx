import React from 'react';
import { LiaStarSolid, LiaStarHalfAltSolid, LiaStar } from 'react-icons/lia';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const int = Math.floor(rating);
  const decimal = Number((rating - int).toFixed(2));
  let fullStars = 0;
  let halfStar = 0;

  if (decimal < 0.3) {
    fullStars = int;
  } else if (0.3 <= decimal && decimal < 0.8) {
    fullStars = int;
    halfStar = 1;
  } else if (0.8 <= decimal) {
    fullStars = int + 1;
  }
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <>
      {Array(fullStars).fill(<LiaStarSolid className="text-lg" />)}
      {halfStar ? <LiaStarHalfAltSolid className="text-lg" /> : null}
      {Array(emptyStars).fill(<LiaStar className="text-lg" />)}
    </>
  );
};

export default StarRating;
