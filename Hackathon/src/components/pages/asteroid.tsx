import './asteroid.css'
import greenhouseimg from './../../assets/greenhouse.png'
import groundimg from './../../assets/ground.png'
import mineimg from './../../assets/mine.png'
import rocketimg from './../../assets/rocket.png'
import React from 'react'
import useCurrency from '../../hook/useCurrency'


const Asteroid = () => {
    const xd = useCurrency();
    return (

        <div className='background1'>
            <div className='rocket'>
                <img alt='rocket' src={rocketimg} onClick={(e: React.MouseEvent<HTMLElement>)=>{
                    xd.moveToPage("rocket")
                }}/>
            </div>
            <div className='greenhouse'>
            <img alt='greenhouse' src={greenhouseimg} onClick={(e: React.MouseEvent<HTMLElement>)=>{
                    xd.moveToPage('greenhouse')
                }}/>
            </div>

            <div className='mine' onClick={(e: React.MouseEvent<HTMLElement>)=>{
                    xd.moveToPage("mine")
                }}>
            <img alt='mine' src={mineimg}/>
            </div>
            <div className='ground'>
            <img alt='ground' src={groundimg}/>
            </div>
        </div>
    )
}

export default Asteroid;