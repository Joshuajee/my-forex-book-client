import * as React from 'react';
import sidenav from './../styles/sidenav.module.css';
import navbar from "./../styles/navbar.module.css";
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAsset, setCurrentAsset } from '../redux/actions';
import { IStateRedux } from '../Interfaces/redux';
import { GrFormClose } from 'react-icons/gr';
import { setSidenav } from '../redux/actions';

const width = window.innerWidth;

const SideNav = () => {

  const dispatch = useDispatch()

  const { assets, currentAsset, showSidenav } = useSelector((state: IStateRedux) => state)

  const sidenavRef = useRef(null)

  const [active, setActive] = useState({})

  useEffect(() => {

    const url = `${process.env.REACT_APP_HOST}symbols`;
    
    axios.get(url).then(res => {

      if (res.data.status === "success") dispatch(setAsset(res.data.data))

    }, err => {

      console.error(err)

    })
  
  }, [dispatch]);

  useEffect(() => {

    if (width < 756)
      if(showSidenav)
        sidenavRef.current.style.display = "block";
      else
        sidenavRef.current.style.display = "none";

  }, [showSidenav])


  return (
      <nav className={sidenav.sidenav} ref={sidenavRef}>

      { showSidenav &&  <div className={navbar.menu} onClick={() => dispatch(setSidenav(false))}> <GrFormClose size={"26"} /> </div> }

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