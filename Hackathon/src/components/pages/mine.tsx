import './mine.css'
import copperOre from './../../assets/copperOre.png'
import ironOre from './../../assets/ironOre.png'
import goldOre from './../../assets/goldOre.png'
import upgrade0 from './../../assets/upgrade0.png'
import upgrade1 from "./../../assets/upgrade1.png"
import upgrade2 from "./../../assets/upgrade2.png"
import upgrade3 from "./../../assets/upgrade3.png"
import copper from "./../../assets/big_miedz_item.png"
import iron from "./../../assets/big_zelazo_item.png"
import gold from "./../../assets/big_zloto_item.png"
import exitIcon from "./../../assets/exit.png"
import useCurrency from '../../hook/useCurrency'
import { useEffect, useRef } from 'react'
import './../../components/pages/layout/layout.css'
const Mine = () => {

    const xd = useCurrency();
    
    const copperRef = useRef<HTMLImageElement>(null);
    const ironRef = useRef<HTMLImageElement>(null);
    const goldRef = useRef<HTMLImageElement>(null);

    const odpRef1 = useRef<HTMLDivElement>(null);
    const odpRef2 = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const interval = setInterval(() => {
            switch(xd.copperMine){
                case 1:
                    xd.copper+=1
                    break;
                case 2:
                    xd.copper+=4
                    break;
                case 3:
                    xd.copper+=10;
                    break;
                default:
                    break;
            }

            switch(xd.ironMine){
                case 1:
                    xd.iron+=1;
                    break;
                case 2:
                    xd.iron+=4;
                    break;
                case 3:
                    xd.iron+=10;
                    break;
                default:
                    break;
            }

            switch(xd.goldMine){
                case 1:
                    xd.gold+=1;
                case 2:
                    xd.gold+=4;
                case 3:
                    xd.gold+=10;
                default:
                    break;
            }

        }, 60000);
        return () => {
            clearInterval(interval)
        }
    },[])

    return (
        <div className='background'>
            <div className='exit' onClick={(e: React.MouseEvent<HTMLElement>)=>{
                xd.moveToPage("home");
            }}>
                <img src={exitIcon} />
            </div>
                <div className='roof'></div>
                <div className='rightWall'>
                    
                </div>
                <img src={copperOre} className='copperOre' alt='copperOre' onClick={(e: React.MouseEvent<HTMLElement>)=>{
                    switch(xd.copperMine){
                        case 1:
                            xd.add("copper", 2);
                            break;
                        case 2:
                            xd.add("copper", 4);
                            break;
                        case 3:
                            xd.add("copper", 7)
                            break;
                        default:
                            xd.add("copper", 1);
                    }
                }}/>
                <div className='upgrade1' onClick={(e: React.MouseEvent<HTMLElement>)=>{
                        if(xd.copperMine>=3) return;
                        if(xd.copper<100) return;
                        if(xd.copperMine==0){
                            xd.lvlUpMine("copper");
                            xd.substract("copper", 100);
                            copperRef.current!.src=upgrade1;
                        }
                        if(xd.iron<250) return;
                        if(xd.copperMine==1){
                            xd.lvlUpMine("copper");
                            xd.substract("iron", 250);
                            copperRef.current!.src=upgrade2;
                        }
                        if(xd.gold<400) return;
                        if(xd.copperMine==2){
                            xd.lvlUpMine("copper");
                            xd.substract("gold", 400);
                            copperRef.current!.src=upgrade3;
                        }

                    }}>
                    <p>UPGRADE</p>
                </div>
                <div className='cost1'>
                    <div><span>0</span><img src={copper} alt='iCopper'/></div>
                    <div><span>0</span><img src={iron} alt='iIron'/></div>
                    <div><span>0</span><img src={gold} alt='iGold'/></div>
                </div>
        

                <div className='odblokuj1' ref={odpRef1} onClick={(e: React.MouseEvent<HTMLElement>)=>{
                    if(xd.ironMine>=1) return;
                    if(xd.copper<200) return;
                    xd.lvlUpMine("iron");
                    odpRef1.current!.style.display="none";
                }}><p>odblokuj</p></div>
                <div className='gate1'></div>

                <div className='floor1'></div>

                <img src={ironOre} className='ironOre' alt='ironOre' onClick={(e: React.MouseEvent<HTMLElement>)=>{
                    switch(xd.ironMine){
                        case 1:
                            xd.add("iron", 1);
                            break;
                        case 2:
                            xd.add("iron", 4);
                            break;
                        case 3:
                            xd.add("iron", 7)
                            break;
                        default:
                            xd.add("iron", 0);
                    }
                }}/>
                <div className='gate2'></div>
                <div className='floor2'></div>
                <img src={goldOre} className='goldOre' alt='goldOre' onClick={(e: React.MouseEvent<HTMLElement>)=>{
                    switch(xd.goldMine){
                        case 1:
                            xd.add("gold", 1);
                            break;
                        case 2:
                            xd.add("gold", 4);
                            break;
                        case 3:
                            xd.add("gold", 7)
                            break;
                        default:
                            xd.add("gold", 0);
                    }
                }}/>
                <div className='leftWall'>
                    <img className='upgrade1' ref={copperRef} src={upgrade0} alt='upgradeCopper' />
                    <img className='upgrade2' ref={ironRef} src={upgrade0} alt='upgradeIron' />
                    <img className='upgrade3' ref={goldRef} src={upgrade0} alt='upgradeGold' />


                </div>

                <div className='upgrade2' onClick={(e: React.MouseEvent<HTMLElement>)=>{
                        if(xd.ironMine>=3) return;
                        if(xd.copper<100) return;
                        if(xd.copperMine==0){
                            xd.lvlUpMine("iron");
                            xd.substract("copper", 100);
                            ironRef.current!.src=upgrade1;
                        }
                        if(xd.iron<375) return;
                        if(xd.copperMine==1){
                            xd.lvlUpMine("iron");
                            xd.substract("iron", 375);
                            ironRef.current!.src=upgrade2;
                        }
                        if(xd.gold<800) return;
                        if(xd.copperMine==2){
                            xd.lvlUpMine("iron");
                            xd.substract("gold", 800);
                            ironRef.current!.src=upgrade3;
                        }
                    }}>
                    <p>UPGRADE</p>
                </div>


                <div className='odblokuj2' ref={odpRef2} onClick={(e: React.MouseEvent<HTMLElement>)=>{
                    if(xd.goldMine>=1) return;
                    if(xd.iron<200) return;
                    xd.lvlUpMine("iron");
                    odpRef2.current!.style.display="none";
                }}><p>odblokuj</p></div>
                <div className='gate2'></div>
                <div className='floor2'></div>
                <img src={goldOre} className='goldOre' alt='goldOre'/>
                                <div className='leftWall'>
                                    <img className='level1' ref={copperRef} src={upgrade0} alt='upgradeCopper'/>
                                    <img className='level2' ref={ironRef} src={upgrade0} alt='upgradeIron'/>
                                    <img className='level3' ref={goldRef} src={upgrade0} alt='upgradeGold'/>
                                </div>
                <div className='upgrade3' onClick={(e: React.MouseEvent<HTMLElement>)=>{
                        if(xd.goldMine>=3) return;
                        if(xd.copper<100 || xd.iron<100 || xd.gold<100) return;
                        if(xd.goldMine==0){
                            xd.lvlUpMine("gold");
                            xd.substract("copper", 100);
                            xd.substract("iron", 100);
                            xd.substract("gold", 100);
                            goldRef.current!.src=upgrade1;
                        }
                        if(xd.copper<400 || xd.iron<400 || xd.gold<400) return;
                        if(xd.goldMine==1){
                            xd.lvlUpMine("gold");
                            xd.substract("copper", 400);
                            xd.substract("iron", 400);
                            xd.substract("gold", 400);
                            goldRef.current!.src=upgrade2;
                        }
                        if(xd.copper<400 || xd.iron<400 || xd.gold<400) return;
                        if(xd.copperMine==2){
                            xd.lvlUpMine("gold");
                            xd.substract("copper", 800);
                            xd.substract("iron", 800);
                            xd.substract("gold", 800);
                            goldRef.current!.src=upgrade3;
                        }

                <div className='upgrade3'>
              
                    <p>UPGRADE</p>
                </div>
                <div className='cost3'>
                    <div><span>0</span><img src={copper} alt='iCopper'/></div>
                    <div><span>0</span><img src={iron} alt='iIron'/></div>
                    <div><span>0</span><img src={gold} alt='iGold'/></div>
                </div>
    <div className='floor'></div>

        </div>
    )
}

export default Mine;