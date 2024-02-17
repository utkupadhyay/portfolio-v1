import React from 'react';
import LZString from 'lz-string';

const CompressedText = ({ compressedText }) => {
  const [decompressedText, setDecompressedText] = React.useState('');

  React.useEffect(() => {
    setDecompressedText(LZString.decompressFromBase64(compressedText));
  }, [compressedText]);

  return <p>{decompressedText}</p>;
};

export default CompressedText;
