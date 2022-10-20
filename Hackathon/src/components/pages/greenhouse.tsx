import ground from './../../assets/greenhouseGround.png'
import treeImg from "./../../assets/big_tree.png"
import bushImg from "./../../assets/big_bush.png"
import exitIcon from "./../../assets/exit.png"
import useCurrency from '../../hook/useCurrency'
import './greenhouse.css'
import honeyImg from "./../../assets/big_honey.png"
import { useEffect, useRef } from 'react'



const Greenhouse = () => {
    const xd = useCurrency()
    const honeyRef = useRef<HTMLDivElement>(null);

    function getRandomArbitrary(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    function lootBox() {
        const typ = getRandomArbitrary(1,4);
        switch(typ){
            case 1:
                xd.add("copper", getRandomArbitrary(1, 100))
                break;
            case 2:
                xd.add("iron", getRandomArbitrary(1, 100))
                break;
            case 3:
                xd.add("gold", getRandomArbitrary(1, 100))
                break;
            default:
                console.log("Error~")
                xd.add("copper", 1)
        }
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            honeyRef.current!.style.display="block";
        }, 60000);
        return () => {
            clearInterval(interval)
        }
    },[])

    return (
        <div className="background">
            <div className='exit' onClick={(e: React.MouseEvent<HTMLElement>)=>{
                xd.moveToPage("home");
            }}>
                <img src={exitIcon} />
            </div>
            <div className="tree">
                <img src={treeImg}/>                
            </div>

            <div className="bush">
                <img src={bushImg}/> <img src={bushImg}/> <img src={bushImg}/>
            </div>
            <div className="honey" ref={honeyRef} onClick={(e: React.MouseEvent<HTMLElement>)=>{
                lootBox();
                honeyRef.current!.style.display="none";
            }}>
                <img src={honeyImg} />
            </div>
            <div className="ground">
                <img src={ground} alt="Greenground" />
            </div>
        </div>
    )
}

export default Greenhouse;