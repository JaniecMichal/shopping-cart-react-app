import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddelware from 'redux-saga';
import { watchProductsAction } from './productsSaga';
import productsReducers from './productsSlice';

const sagaMiddelware = createSagaMiddelware();

const store = configureStore({
  reducer: {
    products: productsReducers,
  },
  middleware: [sagaMiddelware],
});

sagaMiddelware.run(watchProductsAction);

export default store;
