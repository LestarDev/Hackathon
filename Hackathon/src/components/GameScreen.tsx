import { useEffect, useRef } from "react";
import Player from "./client/Player";

const GameScreen = () => {
    const player = new Player();
    const ScreenWidth = window.innerWidth;
    const ScreenHeight = window.innerHeight;

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    let x = 10;

    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current!;
            const ctx = canvas.getContext("2d")!;
            ctx.fillStyle = "green";
            ctx.fillRect(x, x, 150, 100);
            x+=10;
            if(x<ScreenWidth){
                player.Iron+=1;
                requestAnimationFrame(render);
            }
                
        }
        render();
    }, [])

    return (
        <canvas ref={canvasRef} height={ScreenHeight} width={ScreenWidth}>
            {player.Iron}
        </canvas>
    )
}

export default GameScreen;