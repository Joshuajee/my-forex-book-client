import * as React from 'react';
import { useEffect, useState } from 'react';
import body from "./../styles/body.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/actions';
import { IStateRedux } from '../Interfaces/redux';
import axios from 'axios';
import StackedBar from './Charts/StackedBar';
import LineChart from './Charts/LineChart';
import { getDate } from '../utils/date';
import Loader from './Loader';
import EmptyChart from './Charts/EmptyChart';




const Body = () => {

    const dispatch = useDispatch()

    const { data, currentAsset } = useSelector((state: IStateRedux) => state)

    const [currentData, setCurrentData] = useState([])
    const [loader, setLoader] = useState(false)
    const [chartData, setChartData] = useState({ labels: [], shortPercentage: [], longPercentage: [], longPositions: [], shortPositions: [],
      totalPositions: [], avgShortPrice: [], avgLongPrice: [], longVolume: [], shortVolume: []})

    useEffect(() => {

      if (currentAsset) {

        setLoader(true)

        const url = `${process.env.REACT_APP_HOST}sentiments/${currentAsset}/0/${300}`;
    
        axios.get(url).then(res => {
    
          if (res.data.status === "success") dispatch(setData(res.data.data))

          setLoader(false)
    
        }, err => {
    
          console.error(err)

          setLoader(false)
    
        })

      }

    }, [currentAsset, dispatch])

    useEffect(() => {

      if(data[currentAsset])
        setCurrentData(data[currentAsset]?.h1)
      else setCurrentData([])

    }, [data, currentAsset])

    useEffect(() => {

      const labels = []
      const shortPercentage = []
      const longPercentage = []
      const longPositions = []
      const shortPositions = []
      const totalPositions = [] 
      const avgShortPrice  = []
      const avgLongPrice = [] 
      const longVolume  = []
      const shortVolume = [] 

      if (currentData.length) {

        for (let i = 0; i < currentData.length; i++) {

          labels.push(getDate(currentData[i].date))
          shortPercentage.push(currentData[i].shortPercentage)
          longPercentage.push(currentData[i].longPercentage)
          shortPositions.push(currentData[i].shortPositions)
          longPositions.push(currentData[i].longPositions)
          totalPositions.push(currentData[i].totalPositions)
          avgShortPrice.push(currentData[i].avgShortPrice)
          avgLongPrice.push(currentData[i].avgLongPrice)
          longVolume.push(currentData[i].longVolume)
          shortVolume.push(currentData[i].shortVolume)

        }


        setChartData({
          labels: labels,
          shortPercentage: shortPercentage,
          longPercentage: longPercentage,
          longPositions: longPositions,
          shortPositions: shortPositions,
          totalPositions: totalPositions,
          avgShortPrice: avgShortPrice,
          avgLongPrice: avgLongPrice,
          longVolume: longVolume,
          shortVolume: shortVolume
        })

      }

    }, [currentData])

    return(
      <div className={body.body}>

        {
          chartData.labels.length === 0 && <EmptyChart text={"Choose an asset on the left panel"} />
        }

      { !loader ?
        <>
          <StackedBar data={chartData} title={"Position Percentages"} />  

          <LineChart 
            data1={chartData.longPositions}  
            data2={chartData.shortVolume} 
            labels={chartData.labels}
            title={"Position Volume"} /> 

        </> : <EmptyChart text={<Loader />} />
      }

      </div>
    )
}

export default Body;