import React from 'react';
interface BadgeProps {
  text: string;
}
const Badge = ({ text }: BadgeProps) => {
  return <p>{text}</p>;
};
export default Badge;
