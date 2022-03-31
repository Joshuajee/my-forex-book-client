export const getYRange = (long: any, short: any, start:number, end: number) : any => {

    const range1 = long.slice(start, end)
  
    const range2 = short.slice(start, end)
  
    const max = Math.max(...range1, ...range2)
  
    const min = Math.min(...range1, ...range2)
  
    const interval = (max - min) * 0.1
  
    return { max: max + interval, min: min - interval }
  }