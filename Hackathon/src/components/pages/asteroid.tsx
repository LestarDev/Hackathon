import './asteroid.css'
import greenhouseimg from './../../assets/greenhouse.png'
import groundimg from './../../assets/ground.png'
import mineimg from './../../assets/mine.png'
import rocketimg from './../../assets/rocket.png'


const Asteroid = () => {

    return (

        <div className='background'>
            <div className='rocket'>
                <img alt='rocket' src={rocketimg}/>
            </div>
            <div className='greenhouse'>
            <img alt='greenhouse' src={greenhouseimg}/>
            </div>

            <div className='mine'>
            <img alt='mine' src={mineimg}/>
            </div>
            <div className='ground'>
            <img alt='ground' src={groundimg}/>
            </div>
        </div>
    )
}

export default Asteroid;