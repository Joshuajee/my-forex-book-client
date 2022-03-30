import * as React from 'react';
import navbar from "./../styles/navbar.module.css";
import  { HiMenu } from "react-icons/hi"
import { useDispatch, useSelector } from 'react-redux';
import { setSidenav } from '../redux/actions';
import { IStateRedux } from '../Interfaces/redux';

const NavBar = () => {

    const dispatch = useDispatch()

    const showSidenav = useSelector((state: IStateRedux) => state.showSidenav) 

    return (
        <header className={navbar.navbar}>

           { !showSidenav &&  <div className={navbar.menu} onClick={() => dispatch(setSidenav(true))}> <HiMenu size={"26"} /> </div> }

        </header>
    )
}

export default NavBar;