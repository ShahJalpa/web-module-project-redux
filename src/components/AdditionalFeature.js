import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/addFeature';

const AdditionalFeature = props => {
  console.log(props);

  //BUTTON EVENT HANDLER
  const handleButtonFeature = (event) => {
    event.preventDefault();
    props.addFeature(props.feature, props.feature.price)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleButtonFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature);
//export default AdditionalFeature;
