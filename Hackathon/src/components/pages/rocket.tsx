import rocketImg from './../../assets/rocket.png'
import groundImg from './../../assets/ground.png'
import useCurrency from '../../hook/useCurrency'
import copperIcon from "./../../../assets/big_miedz_item.png"
import ironIcon from "./../../../assets/big_zelazo_item.png"
import goldIcon from "./../../../assets/big_zloto_item.png"

const Rocket = () => {
    const xd = useCurrency();

    return (
        <div className="rocket">
            <div className='wrapper'>
                <img src={rocketImg} />
                <div>{xd.copper}/5000 </div>
            </div>
           <div className='ground'>
                <img alt='ground' src={groundImg}/>
            </div>
        </div>
    )
}

export default Rocket;