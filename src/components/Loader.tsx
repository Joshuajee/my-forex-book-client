import * as React from 'react';
import loader from "./../styles/loader.module.css";

const Loader = () => {

    return (
        <div className={loader.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader;