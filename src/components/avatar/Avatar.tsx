import React from "react";
import './Avatar.scss'
const Avatar = ({ src, size, align }) => {
  return (<div className="avatar-wrapper" style={{ justifyContent: align }}>
    <img src={src} style={{ width: size, }} />
  </div>)

}
export default Avatar