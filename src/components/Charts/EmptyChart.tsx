import * as React from 'react';
import graph from "./../../styles/graph.module.css";



const EmptyChart = (props: any) => {

  

  return (
    <div className={graph.graph}>

      <div className={graph.empty}> { props.text } </div>

    </div>
  )

}

export default EmptyChart;
