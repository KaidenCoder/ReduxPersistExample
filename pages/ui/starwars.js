import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emptyStarWars, getStarWars, decrement, increment } from '../redux';

const Starwars = () => {
  const { count, starwars } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div>
        <h1>Count:{count}</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(getStarWars())}>Star wars</button>
        <button onClick={() => dispatch(emptyStarWars())}>
          Empty Star wars
        </button>
      </div>
      <div>
        {starwars.map((data, idx) => (
          <div
            key={idx}
            style={{
              border: '1px solid black',
              margin: '0.5em',
              padding: '0.5em',
            }}
          >
            <h3>Name: {data.name}</h3>
            <h3>Birth: {data.birth_year}</h3>
            <h3>Gender: {data.gender}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Starwars;
