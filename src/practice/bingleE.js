import React from 'react';

function bingleE() {
  const animation = {
    display: 'inlineBlock',
    width: '300px',
    height: '300px',
    transition: 'width 2s, height 1s',
    transitionTimingFunction: 'linear'
  };
  return (
    <div>
      <div style={animation}>

      </div>
    </div>
  );
};

export default bingleE;