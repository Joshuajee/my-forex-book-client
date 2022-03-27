import * as React from 'react';
import sidenav from './../styles/sidenav.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAsset, setCurrentAsset } from '../redux/actions';
import { IStateRedux } from '../Interfaces/redux';

const SideNav = () => {

  const dispatch = useDispatch()

  const { assets, currentAsset } = useSelector((state: IStateRedux) => state)

  const [active, setActive] = useState({})

  useEffect(() => {

    const url = `${process.env.REACT_APP_HOST}symbols`;
    
    axios.get(url).then(res => {

      if (res.data.status === "success") dispatch(setAsset(res.data.data))

    }, err => {

      console.error(err)

    })
  
  }, [dispatch]);


  return (
      <nav className={sidenav.sidenav}>

        <hr />

        <ul>

        {
          assets ? 
            assets.map((asset: any ) =>  
              <li 
                className={ (currentAsset === asset) ? sidenav.active : '' }
                //className={sidenav.active}
                onClick={() => dispatch(setCurrentAsset(asset))} 
                key={asset}> {asset} </li> ) : <li></li>
        }
    
        </ul>

      </nav>
  )
}

export default SideNav;