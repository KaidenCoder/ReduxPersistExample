import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export function increment() {
  return {
    type: 'INCREMENT',
  };
}

export function getStarWars() {
  return (dispatch, getState) => {
    const { count, starwars } = getState();
    console.log('count', count, starwars);
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
    const mealsUrl = 'https://www.breakingbadapi.com/api/characters';
    {
      characters.length == 0 &&
        fetch(mealsUrl)
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            dispatch({
              type: 'CHARACTERS',
              payload: res,
            });
          });
    }
  };
}

export function emptyCharacters() {
  return {
    type: 'EMPTY_CHARACTERS',
  };
}

export function decrement() {
  return {
    type: 'DECREMENT',
  };
}

const initialState = {
  count: 10,
  starwars: [],
  characters: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'STARWARS':
      return {
        ...state,
        starwars: [...state.starwars, action.payload],
      };
    case 'CHARACTERS':
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    case 'EMPTY_STARWARS':
      return {
        ...state,
        starwars: [],
      };
    case 'EMPTY_CHARACTERS':
      return {
        ...state,
        characters: [],
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
