import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export function increment() {
  return {
    type: 'INCREMENT',
  };
}

export function decrement() {
  return {
    type: 'DECREMENT',
  };
}

export function getStarWars() {
  return (dispatch, getState) => {
    const { count, starwars } = getState();
    const baseUrl = 'https://swapi.dev/api/people/';
    {
      count > 0 &&
        count < 82 &&
        fetch(`${baseUrl}/${count}`)
          .then((res) => res.json())
          .then((res) => {
            let present = false;
            for (let data of starwars) {
              if (data.name === res.name) {
                present = true;
                break;
              }
            }

            {
              present === false &&
                dispatch({
                  type: 'STARWARS',
                  payload: res,
                });
            }
          });
    }
  };
}

export function emptyStarWars() {
  return {
    type: 'EMPTY_STARWARS',
  };
}

export function getCharacters() {
  return (dispatch, getState) => {
    const { characters } = getState();
    const breakingbadAPI = 'https://www.breakingbadapi.com/api/characters';
    {
      characters != undefined &&
        fetch(breakingbadAPI)
          .then((res) => res.json())
          .then((res) => {
            dispatch({
              type: 'CHARACTERS',
              payload: res,
            });
          });
    }
  };
}

export function bookmarkSingleCharacter(data) {
  return {
    type: 'BOOKMARK_SINGLE_CHARACTER',
    payload: data,
  };
}

export function unbookmarkSingleCharacter(id) {
  return {
    type: 'UNBOOKMARK_SINGLE_CHARACTER',
    payload: id,
  };
}

export function emptyCharacters() {
  return {
    type: 'EMPTY_CHARACTERS',
  };
}

const initialState = {
  count: 10,
  starwars: [],
  characters: [],
  bookmark_character: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHARACTERS':
      return {
        ...state,
        characters: [action.payload],
      };
    case 'BOOKMARK_SINGLE_CHARACTER':
      return {
        ...state,
        bookmark_character: [...state.bookmark_character, action.payload],
      };
    case 'UNBOOKMARK_SINGLE_CHARACTER':
      let arr = [...state.bookmark_character];
      let result = arr.filter((data) => data.char_id !== action.payload);
      return {
        bookmark_character: [...result],
      };
    case 'EMPTY_CHARACTERS':
      return {
        characters: [],
      };
    case 'STARWARS':
      return {
        ...state,
        starwars: [...state.starwars, action.payload],
      };
    case 'EMPTY_STARWARS':
      return {
        ...state,
        starwars: [],
      };
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState()));
export default store;
