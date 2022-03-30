import * as React from 'react';
import graph from "./../../styles/graph.module.css";
import { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
//import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';

  
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  zoomPlugin,
  Title,
  Tooltip,
  Legend
);


const LineChart = (props: any) => {

  const { labels, data1, data2, title } = props


  const [chartData, setChartData] = useState(null)
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };


  

  useEffect(() => {

    if (labels.length !== 0) {

      const data = {
        labels,
        datasets: [
          {
            label: 'Long',
            data: data1,
            backgroundColor: 'rgb(75, 192, 192)',
          },
          {
            label: 'Short',
            data: data2,
            backgroundColor: 'rgb(255, 99, 132)',
          }
        ],
      };

      setChartData(data)

    }

    return () => { };

  }, [labels, data1, data2]);


  return (
    <div className={graph.graph}>

      {/* { chartData && <Line options={options} data={chartData} /> }  */}

    </div>
  )

}

export default LineChart;
