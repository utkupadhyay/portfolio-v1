import React, { useEffect, useState } from 'react';

interface MaxLengthEllipsisProps {
  text: string;
  maxLength?: number;
}

const MaxLengthEllipsis: React.FC<MaxLengthEllipsisProps> = ({
  text,
  maxLength = 200,
}) => {
  const [ellipsisText, setEllipsisText] = useState('');

  useEffect(() => {
    if (text.length > maxLength) {
      setEllipsisText(`${text.substring(0, maxLength)}...`);
    } else {
      setEllipsisText(text);
    }
  }, [maxLength, text]);

  return <div className="max-length-ellipsis">{ellipsisText}</div>;
};

export default MaxLengthEllipsis;
