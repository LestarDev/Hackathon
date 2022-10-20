import './mine.css'
import copperOre from './../../assets/copperOre.png'
import ironOre from './../../assets/ironOre.png'
import goldOre from './../../assets/goldOre.png'
import upgrade0 from './../../assets/upgrade0.png'
//import copperIcon from "./../../../assets/big_miedz_item.png"
//import ironIcon from "./../../../assets/big_zelazo_item.png"
//import goldIcon from "./../../../assets/big_zloto_item.png"
import './../../components/pages/layout/layout.css'
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

                <div className='upgrade1'>
                    <p>UPGRADE</p>
                </div>
        

                <div className='odblokuj1'><p>odblokuj</p></div>
                <div className='gate1'></div>

                <div className='floor1'></div>

                <img src={ironOre} className='ironOre' alt='ironOre'/>



                <div className='upgrade2'>
                    <p>UPGRADE</p>
                </div>


                <div className='odblokuj2'><p>odblokuj</p></div>
                <div className='gate2'></div>
                <div className='floor2'></div>
                <img src={goldOre} className='goldOre' alt='goldOre'/>
                                <div className='leftWall'>
                                    <img className='level1' src={upgrade0} alt='upgradeCopper'/>
                                    <img className='level2' src={upgrade0} alt='upgradeIron'/>
                                    <img className='level3' src={upgrade0} alt='upgradeGold'/>
                                </div>
                <div className='upgrade3'>
                    <p>UPGRADE</p>
                </div>
    <div className='floor'></div>

        </div>
    )
}

export default Mine;