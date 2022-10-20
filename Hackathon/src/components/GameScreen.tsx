import { useEffect, useRef } from "react";
import useCurrency from "../hook/useCurrency";
import Greenhouse from "./pages/greenhouse";


const GameScreen = () => {
    const xd = useCurrency()
    // const ScreenWidth = window.innerWidth;
    // const ScreenHeight = window.innerHeight;

    // const canvasRef = useRef<HTMLCanvasElement | null>(null);
    
    // let x = 10;

    // useEffect(() => {
    //     const render = () => {
    //         const canvas = canvasRef.current!;
    //         const ctx = canvas.getContext("2d")!;
    //         ctx.fillStyle = "green";
    //         ctx.fillRect(x, x, 150, 100);
    //         // x+=10;
    //         if(x<ScreenWidth){
    //             // requestAnimationFrame(render);
    //         }
                
    //     }
    //     render();
    // }, [])
    // <canvas ref={canvasRef} height={ScreenHeight} width={ScreenWidth}>
            
    //     </canvas>
    return (
        <div>
          <Greenhouse />
          {xd.gold}
        </div>
    )
}

export default GameScreen;