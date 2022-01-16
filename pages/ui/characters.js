import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters, bookmarkSingleCharacter } from '../redux';

const Characters = () => {
  const datas = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
    >
      <div
        style={{
          display: 'grid',
          margin: '2em',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2em',
          gridAutoRows: 'minmax(100px, auto)',
        }}
      >
        {datas.characters.length > 0 &&
          datas.characters[0].map((data, idx) => (
            <div
              key={idx}
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              <img src={data.img} width="100%" height="400px" alt={data.name} />
              <h4>{data.name}</h4>
              <button onClick={() => dispatch(bookmarkSingleCharacter(data))}>
                Bookmark
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Characters;
