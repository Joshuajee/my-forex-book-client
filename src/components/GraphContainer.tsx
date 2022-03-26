import * as React from 'react';
import graph from "./../styles/graph.module.css";
import dummy from '../dummy';
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
import { Bar } from 'react-chartjs-2';
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


const GraphContainer = (props: any) => {

  const [data, setData] = useState(null);

  const options = {
    plugins: {
      title: {
        display: true,
        text: `${props.title}`,
      },
      zoom: {
        limits: {
          y: {min: 0, max: 300}
        },
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 25,
      },
      y: {
        stacked: true, 
      },
    },
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true
        },
        mode: 'xy',
      }
    }
  };
  

  useEffect(() => {

    const labels = []
    const shortPercentage = []
    const longPercentage = []

    for (let i = 0; i < dummy.length; i++) {

      labels.push(dummy[i].date)
      shortPercentage.push(dummy[i].shortPercentage)
      longPercentage.push(dummy[i].longPercentage)

    }

    const data = {
      labels,
      datasets: [
        {
          label: 'Long',
          data: longPercentage,
          backgroundColor: 'rgb(75, 192, 192)',
        },
        {
          label: 'Short',
          data: shortPercentage,
          backgroundColor: 'rgb(255, 99, 132)',
        }
      ],
    };

    setData(data)

    return () => { };

  }, []);


console.log(data)

  return (
    <div className={graph.graph}>

      { data && <Bar options={options} data={data} /> }

    </div>
  )

}

export default GraphContainer;