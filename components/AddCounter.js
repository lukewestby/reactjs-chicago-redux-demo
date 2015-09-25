import React from 'react';
import { connect } from 'react-redux';

import { add, addAsync } from '../state/counters.js';

const connector = connect((state) => state, {
  add,
  addAsync
});

export default connector(AddCounter);

function AddCounter({ counters, loading, add, addAsync }) {

  const loadingSpan = loading ? <span>loading!</span> : null;

  return (
    <div>
      <span>{counters.add}</span>
      {loadingSpan}
      <button onClick={() => addAsync(4)}>
        +4 (Async)
      </button>
      <button onClick={() => add(2)}>
        +2
      </button>
      <button onClick={() => add(-1)}>
        -1
      </button>
    </div>
  );
}
