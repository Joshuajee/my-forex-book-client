import { ASSETS, CURRENT_ASSET, DATA, SIDENAV } from "../constants";

export function setAsset(payload: string) : object {
    console.log("Set Assets", payload)
    localStorage.setItem("assets", JSON.stringify(payload))
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
    
export function setSidenav(payload: boolean) : object {
    console.log("Set Sidenav", payload)
    return { type: SIDENAV, payload };
}

export function dataPrepend(payload: any) : object {
    console.log("Set Sidenav", payload)
    return { type: SIDENAV, payload };
}
    
    