import { ASSETS, CURRENT_ASSET, DATA } from "../constants";

export function setAsset(payload: string) : object {
    console.log("Set Assets", payload)
    return { type: ASSETS, payload };
}

export function setCurrentAsset(payload: string) : object {
    console.log("Set Current Asset", payload)
    return { type: CURRENT_ASSET, payload };
}
    
    
export function setData(payload: string) : object {
    console.log("Set Data", payload)
    return { type: DATA, payload };
}
    
    
