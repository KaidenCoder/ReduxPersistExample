import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from '../redux';
import Characters from '../ui/characters';
import Starwars from '../ui/starwars';

const HomePage = () => {
  return (
    <div>
      <Characters />
      {/* <Starwars /> */}
    </div>
  );
};

export default HomePage;
