import React from 'react';

const StarRating = ({ rating, count, size = 'medium' }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Size configurations
  const sizeConfig = {
    small: { fontSize: '12px', spacing: '4px' },
    medium: { fontSize: '14px', spacing: '8px' },
    large: { fontSize: '18px', spacing: '8px' }
  };

  const currentSize = sizeConfig[size] || sizeConfig.medium;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <span key={i} style={{ color: '#ffc107', fontSize: currentSize.fontSize }}>
          ★
        </span>
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <span key={i} style={{ color: '#ffc107', fontSize: currentSize.fontSize }}>
          ☆
        </span>
      );
    } else {
      stars.push(
        <span key={i} style={{ color: '#e0e0e0', fontSize: currentSize.fontSize }}>
          ★
        </span>
      );
    }
  }

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      fontSize: currentSize.fontSize,
      gap: '2px'
    }}>
      <div style={{ display: 'flex', gap: '1px' }}>
        {stars}
      </div>
      {count !== undefined && (
        <span style={{ 
          marginLeft: currentSize.spacing, 
          color: '#666',
          fontSize: `calc(${currentSize.fontSize} - 2px)`
        }}>
          ({count})
        </span>
      )}
    </div>
  );
};

export default StarRating;