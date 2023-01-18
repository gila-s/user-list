
import { all } from 'redux-saga/effects';
import { watchUsers } from '../features/users/sagas';

export function* rootSaga() {
    yield all([
        watchUsers(),
        // TODO Replace with a real saga.
    ]);
}
