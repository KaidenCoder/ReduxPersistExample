import React from 'react';
import Navbar from '../../components/navbar';
import Characters from '../ui/characters';
import Starwars from '../ui/starwars';

const HomePage = ({ data }) => {
  return (
    <div>
      <Navbar />
      <Characters data={data} />
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://www.breakingbadapi.com/api/characters');
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default HomePage;
