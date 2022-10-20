import rocketImg from './../../assets/rocket.png'
import groundImg from './../../assets/ground.png'
import useCurrency from '../../hook/useCurrency'
import copperIcon from "./../../assets/big_miedz_item.png"
import ironIcon from "./../../assets/big_zelazo_item.png"
import goldIcon from "./../../assets/big_zloto_item.png"
import exitIcon from "./../../assets/exit.png"

const Rocket = () => {
    const xd = useCurrency();

    return (
        <div className="rocket">
            <div className='exit' onClick={(e: React.MouseEvent<HTMLElement>)=>{
                xd.moveToPage("home");
            }}>
                <img src={exitIcon} />
            </div>
            <div className='wrapper'>
                <img src={rocketImg} />
                <div>{xd.copper}/5000 <img src={copperIcon} /> </div>
                <div>{xd.iron}/5000 <img src={ironIcon} /> </div>
                <div>{xd.gold}/5000 <img src={goldIcon} /> </div>
            </div>
           <div className='ground'>
                <img alt='ground' src={groundImg}/>
            </div>
        </div>
    )
}

export default Rocket;