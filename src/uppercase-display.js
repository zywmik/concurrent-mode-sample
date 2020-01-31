import React from 'react';

const UppercaseDisplay = ({textResource, isPending}) => {
  return (
    <h1 style={{opacity: isPending ? 0.5 : 1}}>
      {textResource ? textResource.read() : '☝ Please submit text. ☝'}
    </h1>
  );
};

export default UppercaseDisplay;