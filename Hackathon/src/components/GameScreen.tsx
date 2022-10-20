import { useEffect, useRef } from "react";
import Asteroid from "./pages/asteroid";
import useCurrency from "../hook/useCurrency";
import Greenhouse from "./pages/greenhouse";


const GameScreen = () => {
    const xd = useCurrency()
    
    return (
        <div>
        <Asteroid />
        </div>
    )
}

export default GameScreen;