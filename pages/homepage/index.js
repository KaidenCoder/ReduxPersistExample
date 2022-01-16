import { Router, useRouter } from 'next/router';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar';
import {} from '../redux';
import Characters from '../ui/characters';
import Starwars from '../ui/starwars';

const HomePage = () => {
  const Router = useRouter();
  return (
    <div>
      <Navbar />
      <Characters />
    </div>
  );
};

export default HomePage;
