import { takeEvery, call, put } from 'redux-saga/effects';
import {
  fetchProductsData,
  fetchProductsCart,
  setProductsData,
  setProductsCart,
  setLoading,
  setOffLoading,
} from './productsSlice';
import { getData } from 'assets/customFunctions/getData';

function* fetchProductsDataHandler() {
  try {
    yield put(setLoading());
    const path = '/products.json';
    const productsDetails = yield call(getData, path);
    yield put(setProductsData(productsDetails));
  } catch (error) {
    yield call(alert, 'Coś poszło nie tak!');
  }
  yield put(setOffLoading());
}

function* fetchQuantityDataHandler() {
  try {
    yield put(setLoading());
    const path = '/cartProducts.json';
    const productInCart = yield call(getData, path);
    yield put(setProductsCart(productInCart));
  } catch (error) {
    yield call(alert, 'Coś poszło nie tak!');
  }
  yield put(setOffLoading());
}

export function* watchProductsAction() {
  yield takeEvery(fetchProductsData.type, fetchProductsDataHandler);
  yield takeEvery(fetchProductsCart.type, fetchQuantityDataHandler);
}
