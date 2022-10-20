import useCurrency from "../hook/useCurrency";
import Asteroid from "./pages/asteroid";
import Greenhouse from "./pages/greenhouse";
import Layout from "./pages/layout/layout";
import Mine from "./pages/mine";
import Rocket from "./pages/rocket";

function Page(){
    const xd = useCurrency();
    let page;
    switch(xd.page){
        case 1:
            page =  <Greenhouse/>
            break;
        case 2:
            page = <Mine/>
            break;
        case 3:
            page = <Rocket/>
            break;
        default:
            page = <Asteroid/>
    }
    return page
}

const GameScreen = () => {
    const xd = useCurrency();
    return (
        <>
            <Page/>
            <Layout />
        </>
    )
}

export default GameScreen;