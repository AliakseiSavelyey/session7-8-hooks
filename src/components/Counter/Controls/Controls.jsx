import React from 'react';
import './Controls.scss';

export default function Controls({ dispatch }) {
  return (
    <div className="Counter-controls">
      <button
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Увеличить на 1
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Уменьшить на 1
      </button>
    </div>
  );
}
