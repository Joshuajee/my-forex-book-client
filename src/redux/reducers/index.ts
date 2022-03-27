import { IStateRedux } from "../../Interfaces/redux";
import { setData } from "./data";
import { ASSETS, CURRENT_ASSET, DATA } from "../constants";


const initialState : IStateRedux = {
    assets: null,
    currentAsset: null,
    data: { }
};
  
function rootReducer(state = initialState, action: any): IStateRedux {

    console.log("Action Type", action.type)

    console.log({ ...state })

    const payload = action.payload

    switch (action.type) {
        case ASSETS:
            return { ...state, assets: payload }
        case CURRENT_ASSET:
            return { ...state, currentAsset: payload }
        case DATA:
            return setData(state, payload)
        default:
            return state
    }
};
  

export default rootReducer;