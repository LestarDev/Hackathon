import scene1 from "./../../assets/scene1.png"
import scene2 from "./../../assets/scene2.png"
import scene4 from "./../../assets/scene4.png"
import sceneFinal from "./../../assets/finale_scene.png"
import React, { useRef } from 'react'
import './theend.css'
import useCurrency from "../../hook/useCurrency"


const TheEnd = () => {
    const refImg = useRef<HTMLImageElement>(null);
    const xd = useCurrency();
    const screenWidth = window.innerWidth*0.7;
    const screenHeight = window.innerHeight*0.7;
    let scene = 1;
    return (
        <div className='last'>
                <img width={screenWidth} height={screenHeight} src={scene1} ref={refImg} onClick={(e: React.MouseEvent<HTMLElement>)=>{
                    console.log(refImg.current!.src)
                    switch(scene){
                        case 1:
                            refImg.current!.src = scene2
                            scene +=1;
                            xd.add("copper", 0)
                            break;
                        case 2:
                            refImg.current!.src=scene4
                            scene +=1;
                            break;
                        case 3:
                               xd.moveToPage("home");
                               break;
                        case 4:
                            refImg.current!.src = sceneFinal;
                            break;                 
                        }
                }}/>
        </div>
    )
}
export default TheEnd