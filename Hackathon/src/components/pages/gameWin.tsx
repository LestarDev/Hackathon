import './theend.css'
import lastScreen from "./../../assets/finale_scene.png"

const GameWin = () => {
    const screenWidth = window.innerWidth*0.7;
    const screenHeight = window.innerHeight*0.7;
    return (
        <div className='last'>
            <img src={lastScreen} width={screenWidth} height={screenHeight} />
        </div>
    )
}

export default GameWin;