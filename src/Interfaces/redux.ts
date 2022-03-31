export interface IStateDataModel {
    h1: Array<IData>;
    h2: Array<IData>;
    h3: Array<IData>;
    h4: Array<IData>;
}


export interface IStateData {
    [key: string]: IStateDataModel;
}

export interface IStateRedux {
    assets: any,
    currentAsset: string,
    data: IStateData,
    showSidenav: boolean,
    xMax: number
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
