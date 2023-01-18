import {
    all,
    call,
    takeLatest,
    put,
    select
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
    ActionType,
    getType,
} from 'typesafe-actions';
import { getUsers } from '../../api/api';
import * as actions from './actions';
import {
    User
} from './types';
import { getUserListSelector } from './selectors';

export function* requestGetUserList() {
    try {
        const users:  AxiosResponse<Array<User>> = yield call(getUsers);
       
        yield put(actions.getUsersList.success(users.data))
    } catch (e) {
        yield put(actions.getUsersList.failure(''));
    }
}

export function* requestAddUser({payload}: ActionType<typeof actions.addUser.request>) {
    try {
        // const users: User = yield call(addUser, payload);
        const userList: User[] = yield select(getUserListSelector) 
       
        yield put(actions.addUser.success({...payload, id: userList.at(-1)?.id || 0 +1}))
    } catch (e) {
        yield put(actions.getUsersList.failure(''));
    }
}

export function* requestEditUser({payload}: ActionType<typeof actions.editUser.request>) {
    try {
        // const users: User = yield call(editUser, payload);
       
        yield put(actions.editUser.success(payload))
    } catch (e) {
        yield put(actions.getUsersList.failure(''));
    }
}

export function* requestDeleteUser({payload}: ActionType<typeof actions.deleteUser.request>) {
    try {
        // const users: User = yield call(deleteUser, payload);
       
        yield put(actions.deleteUser.success(payload))
    } catch (e) {
        yield put(actions.getUsersList.failure(''));
    }
}

export function* watchGetUsersList() {
    yield takeLatest(getType(actions.getUsersList.request), requestGetUserList);
}

export function* watchAddUser() {
    yield takeLatest(getType(actions.addUser.request), requestAddUser);
}

export function* watchDeleteUser() {
    yield takeLatest(getType(actions.deleteUser.request), requestDeleteUser);
}

export function* watchEditUser() {
    yield takeLatest(getType(actions.editUser.request), requestEditUser);
}

export function* watchUsers() {
    yield all([
        call(watchGetUsersList),
        call(watchAddUser),
        call(watchEditUser),
        call(watchDeleteUser),
    ]);
}
