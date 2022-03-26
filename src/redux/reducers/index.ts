import { ASSETS } from "../constants";


interface IState {
    assets: Object
    
};

const initialState : IState = {
    assets: null
};
  
function rootReducer(state = initialState, action: any) {

    console.log("Action Type", action.type)

    const payload = action.payload

    switch (action.type) {
        case ASSETS:
            return { ...state, assets: payload }
        default:
            return state
    }
};
  

export default rootReducer;