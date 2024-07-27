
// import { SETTING_ACTION_TYPE } from '../actions/types';
import data from '../data.json';
// Define the initial state
const initialState = {
    socialPlateforms: data.socialPlateforms,
};

// Create the reducer function
const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SETTING_ACTION_TYPE:
        //   return {
        //     ...state,
        //     // Update the state based on the action
        //   };
        default:
            return state;
    }
};

export default settingReducer;