import React from 'react';
import './SubscribeForm.scss';
interface SubscribeProps {
  placeholder: string;
  submitButtonTxt: string;
}
const SubscribeForm = ({ placeholder, submitButtonTxt }: SubscribeProps) => {
  return (
    <>
      <div className="subscribe-wrapper">
        <input type="text" placeholder={placeholder} />
        <button>{submitButtonTxt}</button>
      </div>
    </>
  );
};
export default SubscribeForm;
