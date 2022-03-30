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

const points = () => {

  return 30
} 


const StackedBar = (props: any) => {

  const { data, title } = props
  const { labels, shortPercentage, longPercentage } = data

  const [maxView, setMaxView] = useState(0)

  useEffect(() => {

    if(labels.length > 1)
      setMaxView((labels.length - 1))

  }, [labels.length])


  const [chartData, setChartData] = useState(null)

  const options = {
    plugins: {
      title: {
        display: true,
        text: `${title}`,
      },
      zoom: {
        limits: {
          y: {min: 0, max: 100}
        },
        pan: {
          enabled: true,
          onPan: (chart: any) => {}
        }
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        min: maxView - points(),
        max: maxView,
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
        mode: 'x',
      }
    }
  };
  

  useEffect(() => {

    const data_ = {
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

    if(labels) setChartData(data_)

    return () => { };

  }, [labels, longPercentage, shortPercentage]);


  return (
    <div className={graph.graph}>

      { chartData && <Bar options={options} data={chartData} /> }

    </div>
  )

}

export default StackedBar;