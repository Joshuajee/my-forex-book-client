import * as moment from "moment"


export const getDate = (date: any) => {

    return moment(date).format("YYYY-MM-DD h:mm")
    
}