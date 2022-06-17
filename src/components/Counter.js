import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import classes from './Counter.module.css';
import { increment, decrement, increase, toggle } from '../app/store';
// import counterActions from '../app/store';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toggler = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = useCallback(() => {
    dispatch(increment());
  }, []);

  const decrementHandler = useCallback(() => dispatch(decrement()), [dispatch]);

  const increaseHandler = useCallback(
    () => dispatch(increase(5)), // { type: 'increase', payload: 5 }
    []
  );

  const toggleCounterHandler = useCallback(() => dispatch(toggle()), []);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{toggler && counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
