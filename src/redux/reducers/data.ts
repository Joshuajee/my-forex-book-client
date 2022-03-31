
export const setData = (state: any, payload: any) : any => {

    const newState = { ...state.data }

    if(payload[0]) {

        const symbol = payload[0].name; 

        if (newState[symbol]) {

            console.log(newState[symbol])

            if(newState[symbol]?.h1) {

                newState[symbol].h1 = [...payload, newState[symbol].h1];

            }

        } else {

            newState[symbol] = { h1: payload};

            return { ...state, data: newState }
        
        }

    }

    return { ...state, data: payload }

}

