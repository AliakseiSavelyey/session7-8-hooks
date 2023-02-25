import { useReducer } from 'react';
import Controls from './Controls';
import './Counter.scss';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };

    default:
      throw new Error(`ошибка${action.type}`);
  }
}
export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
  });

  return (
    <div className="Counter">
      <span className="Counter-value">{state.count}</span>

      <Controls dispatch={dispatch} />
    </div>
  );
}
