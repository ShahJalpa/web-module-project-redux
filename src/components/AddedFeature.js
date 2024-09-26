import React from 'react';

import { connect } from "react-redux";
import { removeFeature } from "../actions/removeFeature";

const AddedFeature = props => {
  //console.log(props)

  const handleButtonX = () => {
    console.log(props);
    props.removeFeature(props.feature);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleButtonX}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);

//export default AddedFeature;
