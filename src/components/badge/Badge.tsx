import React from 'react';
import './Badge.scss';
interface BadgeProps {
  text: string;
}
const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="badge-container">
      <p>{text}</p>
    </div>
  );
};
export default Badge;
