import { all, takeLatest } from 'redux-saga/effects';

import { Types as PeopleTypes } from '../ducks/people';
import { getPeopleData, getMorePeopleData } from './people';

export default function* rootSaga() {
  yield all([
    takeLatest(PeopleTypes.GET_DATA, getPeopleData),
    takeLatest(PeopleTypes.GET_MORE_DATA, getMorePeopleData),
  ]); 
}