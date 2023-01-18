
import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import users from '../features/users/reducer';

export const reducers = combineReducers({
    users,
});

export type AppState = StateType<typeof reducers>;
