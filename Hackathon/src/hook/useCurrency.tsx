import { useDispatch, useSelector } from "react-redux"
import { incrementByAmountCopper, incrementByAmountGold, incrementByAmountIron, decrementByAmountCopper, decrementByAmountGold, decrementByAmountIron } from "../store/slices/currencySlice";

type currencyTypes = "copper" | "iron" | "gold"

const useCurrency = () => {

    const dispatch = useDispatch();
    const {copper, iron, gold} = (useSelector((state) => state) as any).currency;

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
        add
    }
    )

}

export default useCurrency