import { useEffect, useRef } from "react";
import Player from "./client/Player";
import Asteroid from "./pages/asteroid";

const GameScreen = () => {
    const player = new Player();
    const ScreenWidth = window.innerWidth;
    const ScreenHeight = window.innerHeight;

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    let x = 10;

    return (
        <div>
            <Asteroid />
        </div>
    )
}

export default GameScreen;