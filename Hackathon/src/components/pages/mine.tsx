import './mine.css'
import copperOre from './../../assets/copperOre.png'
import ironOre from './../../assets/ironOre.png'
import goldOre from './../../assets/goldOre.png'
import upgrade0 from './../../assets/upgrade0.png'
const Mine = () => {

    function copperUpgrades():number{
        return 0;
    }
    function ironUpgrades():number{
        return 0;
    }
    function goldUpgrades(){
        
        return ;
    }
    

    return (
        <div className='background'>
                <div className='roof'></div>
                <div className='rightWall'>
                    
                </div>
                <img src={copperOre} className='copperOre' alt='copperOre'/>
                <div className='gate1'></div>
                <div className='floor1'></div>
                <img src={ironOre} className='ironOre' alt='ironOre'/>
                <div className='gate2'></div>
                <div className='floor2'></div>
                <img src={goldOre} className='goldOre' alt='goldOre'/>
                <div className='leftWall'>
                    <img className='upgrade1' src={upgrade0} alt='upgradeCopper'/>
                    <img className='upgrade2' src={upgrade0} alt='upgradeIron'/>
                    <img className='upgrade3' src={upgrade0} alt='upgradeGold'/>
                </div>
                <div className='floor'></div>

        </div>
    )
}

export default Mine;