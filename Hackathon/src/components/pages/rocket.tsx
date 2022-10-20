import rocketImg from './../../assets/rocket.png'
import groundImg from './../../assets/ground.png'
import useCurrency from '../../hook/useCurrency'
import copperIcon from "./../../assets/big_miedz_item.png"
import ironIcon from "./../../assets/big_zelazo_item.png"
import goldIcon from "./../../assets/big_zloto_item.png"
import exitIcon from "./../../assets/exit.png"
import "./rocket.css"

const Rocket = () => {
    const xd = useCurrency();

    return (
        <div>
            <div className='exit' onClick={(e: React.MouseEvent<HTMLElement>)=>{
                xd.moveToPage("home");
            }}>
                <img src={exitIcon} />
            </div>
            <div className='wrapper'>
                <img src={rocketImg} />
                <div><div>{xd.copper}/5000 <img src={copperIcon} /> </div>
                <div>{xd.iron}/5000 <img src={ironIcon} /> </div>
                <div>{xd.gold}/5000 <img src={goldIcon} /> </div>
                <div className='koniecGry' onClick={(e: React.MouseEvent<HTMLElement>)=>{
                    if(xd.iron<5000 && xd.copper<5000 && xd.gold<5000) return;
                    alert("Wygrana!");
                    xd.moveToPage("animationEnd");
                    console.log(xd.page)
                }}>Wplac</div>
                </div>
            </div>
           <div className='ground'>
                <img alt='ground' src={groundImg}/>
            </div>
        </div>
    )
}

export default Rocket;