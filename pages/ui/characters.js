import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters, emptyCharacters } from '../redux';
import Image from 'next/image';
import { replaceBasePath } from 'next/dist/server/router';

const Characters = () => {
  const datas = useSelector((state) => state);
  console.log('characters', datas.characters);
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <button onClick={() => dispatch(getCharacters())}>Characters</button>
        <button onClick={() => dispatch(emptyCharacters())}>
          Empty Characters
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          margin: '1em',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          gridAutoRows: 'minmax(100px, auto);',
        }}
      >
        {datas.characters[0] != undefined &&
          datas.characters[0].map((data, idx) => (
            <div key={idx}>
              <img src={data.img} width="150" />
              <h4>{data.name}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Characters;
