import React from "react";
import "./Fullname.css";
import PropTypes from "prop-types";
export default function Fullname(props) {
  return (
    // console.log(props),
    <div>
      <h1 onClick={() => props.handelChange(props.name)}>{props.name}</h1>
      <span>{props.bio}</span>
      <br></br>
      <span>{props.profession}</span>
      <br></br>
      <div>{props.children}</div>
    </div>
  );
}
Fullname.propTypes = {
  handelChange: PropTypes.func,
};
Fullname.defaultProps = {
  profession: "No Data  description",
};
