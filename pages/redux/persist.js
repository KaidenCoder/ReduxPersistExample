import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from '.';
import thunk from 'redux-thunk';

//storage.removeItem('persist:root'); //for clearing the redux persist data
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
export { store, persistor };
