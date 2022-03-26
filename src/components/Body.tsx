import * as React from 'react';
import body from "./../styles/body.module.css";
import GraphContainer from "./GraphContainer";


const Body = () => {

    return(
        <div className={body.body}>

            <GraphContainer title={"Position Percentages"} />

            <GraphContainer title={"Position Percentages"}  />

        </div>
    )
}

export default Body;