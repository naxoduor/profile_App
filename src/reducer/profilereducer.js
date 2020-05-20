import { UPDATE_PROFILES } from '../action/types';
import { connect } from 'react-redux';

const initialState = {
    items: [],
    item: {}
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROFILES:
            return {
                ...state,
                item: action.payload
            }

        default: return state;
    }

}

export default profileReducer