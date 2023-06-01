import React from "react";
import { ReactSVG } from "react-svg";
import Svg from "../assets/svg/sapiens.svg";
import "../assets/css/Hero.css"



class Hero extends React.Component{
    render(){
        return(
            <div className="flex items-center justify-between">
                <div className="left-satu flex flex-col items-start">
                    <h1 className="font-semibold ml-20 text-2xl">Halo Semua Nama, Saya
                        <span className="block text-black text-5xl mt-1">Saefu Salman</span>  
                    </h1>
                    <div className="paragraf">
                        <p className="text-slate-500 text-lg mb-5 ">
                        Software <span className="text-black">Developer</span>
                        </p>
                    </div>
                </div>
                <div className="right">
                    <ReactSVG src={Svg} />
                </div>
            </div>
        )
    }
}

export default Hero