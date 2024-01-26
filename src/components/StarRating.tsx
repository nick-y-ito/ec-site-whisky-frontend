import { FC } from 'react';
import { LiaStarSolid, LiaStarHalfAltSolid, LiaStar } from 'react-icons/lia';

interface StarRatingProps {
  rating: number;
}

export const StarRating: FC<StarRatingProps> = ({ rating }) => {
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
      {Array(fullStars)
        .fill(null)
        .map((_, i) => (
          <LiaStarSolid key={i} className="text-lg" />
        ))}
      {halfStar ? <LiaStarHalfAltSolid className="text-lg" /> : null}
      {Array(emptyStars)
        .fill(null)
        .map((_, i) => (
          <LiaStar key={i} className="text-lg" />
        ))}
    </>
  );
};
