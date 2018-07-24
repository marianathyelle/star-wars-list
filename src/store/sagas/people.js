import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PeopleActions } from '../ducks/people';

export function* getPeopleData() {
  try {
    const { data } = yield call(api.get, '/people');

    const people = data.results;

    yield put(PeopleActions.updatePeople(people));
  }
  catch(err) {
    console.log(err);
  }
};

export function* getMorePeopleData(action) {
  try {
    const { data } = yield call(api.get, `/people/?page=${action.payload.page}`);

    const { results: response } = data;

    console.log(response)

    yield put(PeopleActions.showMorePeople(response));

    if ( action.payload.page === 9 ) {
      yield put(PeopleActions.nothingToShow())
    };
  } 

  catch(err) {
    console.log(err)
  }
};