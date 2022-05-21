import React from "react";
const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(3));
  return (
    <div>
      <h3>Classification Confidence: {label}</h3>  
      {confidence*100}%
    </div>
  );
};
export default Chart;