import * as React from 'react';
import sidenav from './../styles/sidenav.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SideNav = () => {

    const [assets, setAssets]: any = useState(null);
    

    useEffect(() => {

        const url = `${process.env.REACT_APP_HOST}symbols`;
        
        axios.get(url).then(res => {
    
          if (res.data.status === "success") {
            setAssets(res.data.data)
          }
    
        }, err => {
    
          console.error(err)
    
        })
    
    }, []);



    return (
        <nav className={sidenav.sidenav}>

            <hr />

            <ul>

            {
                assets ? assets.map((asset: any )=>  <li> {asset} </li> ) : <li></li>
            }
        
            </ul>

        </nav>
    )
}

export default SideNav;