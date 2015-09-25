import React from 'react';
import { connect } from 'react-redux';

import { multiply } from '../state/counters.js';

const connector = connect((state) => state, {
  multiply
});

export default connector(MultiplyCounter);

function MultiplyCounter({ counters, multiply }) {
  return (
    <div>
      <span>{counters.multiply}</span>
      <button onClick={() => multiply(4)}>
        x4
      </button>
      <button onClick={() => multiply(1/2)}>
        /2
      </button>
    </div>
  );
}
