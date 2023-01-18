import { createSelector } from 'reselect';
import { AppState } from '../../app/reducers';

export const getUserState = createSelector((state: AppState) => state, ({ users }) => users);
export const getUserListSelector = createSelector(getUserState, ({ userList }) => userList);
export const getLoadingSelector = createSelector(getUserState, ({ loading }) => loading);
