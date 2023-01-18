import {
    createAction,
    createAsyncAction,
} from 'typesafe-actions';
import {
    User,
} from './types';

export const getUsersList = createAsyncAction(
    'USERS/GET_USER_LIST_REQUEST',
    'USERS/GET_USER_LIST_SUCCESS',
    'USERS/GET_USER_LIST_FAILURE',
)<void, User[], string>();

export const addUser = createAsyncAction(
    'USERS/ADD_USER_REQUEST',
    'USERS/ADD_USER_SUCCESS',
    'USERS/ADD_USER_FAILURE',
)<User, User, string>();

export const editUser = createAsyncAction(
    'USERS/EDIT_USER_REQUEST',
    'USERS/EDIT_USER_SUCCESS',
    'USERS/EDIT_USER_FAILURE',
)<User, User, string>();

export const deleteUser = createAsyncAction(
    'USERS/DELETE_USER_REQUEST',
    'USERS/DELETE_USER_SUCCESS',
    'USERS/DELETE_USER_FAILURE',
)<number, number, string>();

export const getUserDetails = createAction(
    'USERS/GET_USER_DETAILS',
)<number>();
