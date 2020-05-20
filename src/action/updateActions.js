import{UPDATE_PROFILES} from './types'
export const updateProfiles = (profiles) => dispatch => {
    dispatch({
        type: UPDATE_PROFILES,
        payload: profiles
    })
}
