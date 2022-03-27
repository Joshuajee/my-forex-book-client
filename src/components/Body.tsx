import * as React from 'react';
import { useEffect, useState } from 'react';
import body from "./../styles/body.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/actions';
import { IStateRedux } from '../Interfaces/redux';
import axios from 'axios';
import StackedBar from './Charts/StackedBar';
import LineChart from './Charts/LineChart';




const Body = () => {

    const dispatch = useDispatch()

    const { data, currentAsset } = useSelector((state: IStateRedux) => state)

    const [currentData, setCurrentData] = useState([])

    useEffect(() => {

      if (currentAsset) {

        const url = `${process.env.REACT_APP_HOST}sentiments/${currentAsset}/0/${300}`;
    
        axios.get(url).then(res => {
    
          if (res.data.status === "success") dispatch(setData(res.data.data))

          console.log(res?.data?.data)
    
        }, err => {
    
          console.error(err)
    
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

      if (currentData.length) {

        for (let i = 0; i < currentData.length; i++) {

          labels.push(currentData[i])
          shortPercentage.push(currentData[i])
          longPercentage.push(currentData[i])

        }

      }
  
    }, [currentData])


    return(
      <div className={body.body}>

        <StackedBar data={currentData} title={"Position Percentages"} />

        <LineChart data={currentData} title={"Position Percentages"} />

      </div>
    )
}

export default Body;