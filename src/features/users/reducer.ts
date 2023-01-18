import { Reducer } from 'redux';
import {
    ActionType,
    getType,
} from 'typesafe-actions';
import * as actions from './actions';
import { LoadingState } from './constans';
import { User, UsersState } from './types';

type Actions = ActionType<typeof actions>;

const initialState: UsersState = {
    loading: LoadingState.IDLE,
    userList: []
};

const userReducer: Reducer<UsersState, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case getType(actions.getUsersList.request): {
            return {
                ...state,
                loading: LoadingState.REQUEST
            };
        }
        case getType(actions.getUsersList.success): {
            return {
                ...state,
                userList: action.payload,
                loading: LoadingState.SUCCESS
            };
        }

        case getType(actions.getUsersList.failure): {
            return {
                ...state,
                loading: LoadingState.FAILURE
            };
        }

        case getType(actions.addUser.success): {
            return {
                ...state,
                userList: [...state.userList, action.payload],
            };
        }
        case getType(actions.deleteUser.success): {
            return {
                ...state,
                userList: state.userList.filter((user: User) => (
                    user.id != action.payload
                )),
            };
        }
        case getType(actions.editUser.success): {
            return {
                ...state,
                userList: state.userList.map((user: User) => (
                    user.id === action.payload.id ? action.payload : user
                )),
            };
        }
        default: {
            return state;
        }
    }
};

export default userReducer;
