export interface IStateDataModel {
    h1: any;
    h2: any;
    h3: any;
    h4: any;
}

export interface IStateData {
    [key: string]: IStateDataModel;
}

export interface IStateRedux {
    assets: any,
    currentAsset: string,
    data: IStateData,
    showSidenav: boolean
};

export interface IData {
    name: string;
    shortPercentage: number;
    longPercentage: number;
    shortVolume: number;
    longVolume: number;
    longPositions: number;
    shortPositions: number;
    totalPositions: number;
    avgShortPrice: number; 
    avgLongPrice: number;
    date: string;
    timeStamp: number;
}
