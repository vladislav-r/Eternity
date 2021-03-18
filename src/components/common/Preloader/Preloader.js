import preloader from "../../../media/preloader/preloader.svg";
import s from '../../Users/Users.module.css'
import React from "react";

let Preloader = () => {
    return <div className={s.preloaderBlock}>
                <img src={preloader} alt=""/>
            </div>
}

export default Preloader