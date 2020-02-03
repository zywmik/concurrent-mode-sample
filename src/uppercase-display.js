import React from 'react';

const UppercaseDisplay = ({textResource, isPending}) => {
  return (
    <h2 style={{opacity: isPending ? 0.5 : 1}}>
      {textResource ? textResource.read() : '☝ Please submit text.'}
    </h2>
  );
};

export default UppercaseDisplay;