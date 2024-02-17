import React from 'react';
const ShimmerEffect = ({ width, height }) => {
  const gradient = `linear-gradient(to right, #f3f3f3 0%, #ececec 20%, #f3f3f3 40%, #ececec 60%, #f3f3f3 80%, #ececec 100%)`;
  return (
    <div
      style={{
        width,
        height,
        background: gradient,
        backgroundSize: '200% 100%',
        backgroundPosition: 'right bottom',
        animation: `shine 2s ease-in-out infinite`,
      }}
    />
  );
};
export default ShimmerEffect;
