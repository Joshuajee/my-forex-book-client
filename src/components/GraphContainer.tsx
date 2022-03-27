import * as React from 'react';
import graph from "./../styles/graph.module.css";
import { useState, useEffect } from "react";
import { getDate } from '../utils/date';


const GraphContainer = (props: any) => {

  const { data, title, component } = props

  const [chartData, setChartData] = useState(null)


  return (
    <div className={graph.graph}>

      { component }

    </div>
  )

}

export default GraphContainer;