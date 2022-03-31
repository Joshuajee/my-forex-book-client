import { IStateRedux } from "../../Interfaces/redux";
import { setData,  } from "./data";
import { ASSETS, CURRENT_ASSET, DATA, SIDENAV } from "../constants";

const initialState : IStateRedux = {
    assets: JSON.parse(localStorage.getItem("assets")),
    currentAsset: null,
    data: { },
    showSidenav: false,
    xMax: 0
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
        // case DATA_PREPEND:
        //     return dataPrepend(state, payload)
        case SIDENAV:
            return { ...state, showSidenav: payload }
        default:
            return state
    }
};
  

export default rootReducer;