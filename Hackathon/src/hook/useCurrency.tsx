import { useDispatch, useSelector } from "react-redux"
import { setPage, lvlUpMineCopper, lvlUpMineIron, lvlUpMineGold, incrementByAmountCopper, incrementByAmountGold, incrementByAmountIron, decrementByAmountCopper, decrementByAmountGold, decrementByAmountIron } from "../store/slices/currencySlice";

type currencyTypes = "copper" | "iron" | "gold"
type mineType = "copper" | "iron" | "gold"
type pageType = "home" | "greenhouse" | "mine" | "rocket"

const useCurrency = () => {

    const dispatch = useDispatch();
    const {copper, iron, gold, page} = (useSelector((state) => state) as any).currency;

    const moveToPage = (page: pageType) => {
        switch(page){
            case "home":
                dispatch(setPage(0))
                break;
            case "greenhouse":
                dispatch(setPage(1))
                break;
            case "mine":
                dispatch(setPage(2))
                break;
            case "rocket":
                dispatch(setPage(3))
                break;
            default:
                console.log("Error!")
        }
    }

    const lvlUpMine = (current: mineType) => {
        switch(current){
            case "copper":
                dispatch(lvlUpMineCopper())
                break;
            case "iron":
                dispatch(lvlUpMineIron())
                break;
            case "gold":
                dispatch(lvlUpMineGold())
                break;
            default:
                console.log("Error")
        }
    }

    const add = (currency: currencyTypes, amount: number) => {
        switch(currency){
            case "copper":
                dispatch(incrementByAmountCopper(amount))
                break;
            case "iron":
                dispatch(incrementByAmountIron(amount))
                break;
            case "gold":
                dispatch(incrementByAmountGold(amount))
                break;
            default:
                console.log("Error")
        }
        
    }

    const substract = (currency: currencyTypes, amount: number) => {
        switch(currency){
            case "copper":
                dispatch(decrementByAmountCopper(amount))
                break;
            case "iron":
                dispatch(decrementByAmountIron(amount))
                break;
            case "gold":
                dispatch(decrementByAmountGold(amount))
                break;
            default:
                console.log("Error")
        }
    }

    return ({
        copper, iron, gold,
        substract,
        add,
        lvlUpMine,
        moveToPage,
        page
    }
    )

}

export default useCurrency