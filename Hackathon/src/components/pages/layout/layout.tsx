import React from "react"
import './layout.css'
import useCurrency from "../../../hook/useCurrency"
import copperIcon from "./../../../assets/big_miedz_item.png"
import ironIcon from "./../../../assets/big_zelazo_item.png"
import goldIcon from "./../../../assets/big_zloto_item.png"

const Layout = () => {
    const xd = useCurrency()

    return (
        <div id="Layout">
            <div><span>{xd.copper}</span> <img src={copperIcon} alt="Copper"/> </div>

            <div><span>{xd.iron}</span> <img src={ironIcon} alt="Copper" /> </div>

            <div><span>{xd.gold}</span> <img src={goldIcon} alt="Gold" /></div>

            {/* <button onClick={(e: React.MouseEvent<HTMLElement>)=>{
                xd.add("copper", 10)
            }}></button> 

            <button onClick={(e: React.MouseEvent<HTMLElement>)=>{
                xd.add("iron", 10)
            }}></button>

            <button onClick={(e: React.MouseEvent<HTMLElement>)=>{
                xd.add("gold", 10)
            }}></button> */}
        </div>
    )
}

export default Layout