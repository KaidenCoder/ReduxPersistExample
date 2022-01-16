import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../../components/navbar';
import { unbookmarkSingleCharacter, emptyCharacters } from '../../redux';

const charactersbookmark = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const datas = useSelector((state) => state);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
    >
      <Navbar />
      <div>
        <button onClick={() => dispatch(emptyCharacters())}>
          Empty Characters
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          margin: '2em',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2em',
          gridAutoRows: 'minmax(100px, auto)',
        }}
      >
        {datas.bookmark_character != undefined &&
          datas.bookmark_character.map((data, idx) => (
            <div
              key={idx}
              style={{ border: '1px solid black', borderRadius: '10px' }}
            >
              <img src={data.img} width="100%" height="400px" alt={data.name} />
              <h4>{data.name}</h4>
              <button
                onClick={() =>
                  dispatch(unbookmarkSingleCharacter(data.char_id))
                }
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default charactersbookmark;
