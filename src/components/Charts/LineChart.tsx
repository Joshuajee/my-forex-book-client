import * as React from 'react';
import graph from "./../../styles/graph.module.css";
import { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';
import { getYRange } from './logics';

  
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  zoomPlugin,
  Title,
  Tooltip,
  Legend,
  PointElement,

);

const LineChart = (props: any) => {

  const { labels, long, short, title, points, maxView, setMaxView, height } = props

  const [yRange, setYRange] = useState({ max: 0, min: 0})



  const [chartData, setChartData] = useState(null)
  
  const options = {
    responsive: true,
    plugins: {
      zoom: {
        limits: {
          y: { ...yRange }
        },
        pan: {
          enabled: true,
          onPan: (chart: any) => { 

            const scales = chart.chart._sortedMetasets[0]._scaleRanges;

            setMaxView(scales.xmax)

          },
        },
      },
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
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
    },
    scales: {
      x: {
        min: maxView - points,
        max:  maxView,
      },
      y: {
        min: yRange.min,
        max: yRange.max
      },
    },
  };


  

  useEffect(() => {

    const data = {
      labels,
      datasets: [
        {
          label: 'Long',
          data: long,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgb(75, 192, 192)',
        },
        {
          label: 'Short',
          data: short,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)'
        }
      ],
    };


    if (labels.length !== 0) setChartData(data)

    return () => { };

  }, [labels, long, short]);

  useEffect(() => {

    if(labels.length > 1) 
      setMaxView((labels.length - 1))

  }, [labels.length, long, short, setMaxView])

  useEffect(() => {

    if(maxView) 
      setYRange(getYRange(long, short, maxView - points, maxView))

  }, [maxView, points, long, short])


  
  return (
    <div className={graph.graph}>

      { chartData && <Line height={height} options={options} data={chartData} /> } 

    </div>
  )

}

export default LineChart;
