import useCurrency from "../../hook/useCurrency";

const Greenhouse = () => {
    const xd = useCurrency();
    const click = () => {
        xd.add("gold",10)
        console.log(xd.gold);
    }
    return (
        <div className="greenhouse">
            <div className="tree">
                <button onClick={function(e: React.MouseEvent<HTMLElement>){
                    click();
                }}></button>
            </div>

            <div className="bush">
                <button></button>
            </div>
        </div>
    )
}

export default Greenhouse;