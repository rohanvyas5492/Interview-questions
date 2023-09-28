// @ts-nocheck
import React, { useEffect, useState } from 'react';
import "./StarRating.css"


const Star = ({marked, starId, onStarClick}) => {
    return (
        <span className='star' onClick={() => onStarClick(starId)}>
            {marked ? "\u2605" : "\u2606"}
        </span>
    )
}

export default function StarRating({ value, total}) {
  const [rating, setRating] =  useState(value);

  const handleStarClick = (starId) => {
    setRating(starId);
  }

  return (
    <div>
        {Array.from({ length: total },(_, idx) => (
          <Star starId={idx + 1} key={`star_${idx}`} marked={idx < rating} onStarClick={handleStarClick} />
          ))}
    </div>
  );
}
