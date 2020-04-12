import React, { useReducer } from 'react';
import RegisterContext from "./RegisterContext";
import { ADD_REGIGTER, UPDATE_REGIGTER } from '../types';
import RegisterReducer from './RegisterReducer';

const RegisterState = (props) => {
    const initialState = {
        users: [
            {
                id: '1'
            }
        ]
    };

    const [state, dispatch] = useReducer(RegisterReducer,initialState);

    const addContact = () => {
        dispatch({type: ADD_REGIGTER});
    }

    return (
        <RegisterContext.Provider
            value={{
                users: state.users,
                addContact
            }}
        >
            {props.children}
        </RegisterContext.Provider>
    )
}

export default RegisterState;