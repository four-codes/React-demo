import { ADD_REGIGTER, UPDATE_REGIGTER } from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_REGIGTER:
            return {
                ...state,
                users: [...state.users, {id:'1'}]
            };
        default:
            return state;
    }
};