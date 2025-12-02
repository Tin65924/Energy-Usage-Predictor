import React, {useState} from 'react';
import style from './header.module.css';

function Header(){

    return(
        <>
        <header className={style["header-bar"]}>
            <h1 className={style["header-title"]}>Energy Usage Predictor</h1>
            <span className={style["header-date"]}>December 3, 2025</span>
        </header>
        <p className={style["tagline"]}>
            "Forecast consumption and Identify peak usage hours"
        </p>
        </>
    )

}

export default Header