const Mine = () => {

    function copperUpgrades():number{
        return 0;
    }
    function ironUpgrades():number{
        return 0;
    }
    function goldUpgrades(){
        
        return ;
    }
    

    return (
        <div>
                <div className="level1">

                        <div className="copper">
                                <button className="upgrade"></button>
                        </div>

                        <div className="next1">
                            <button className="progress"></button>
                        </div>
                        
                </div>
                
                <div className="level2">

                        <div className="iron">
                                <button className="upgrade"></button>
                        </div>

                        <div className="next2">
                            <button className="progress"></button>
                        </div>
                        
                </div>
                <div className="level3">
                    
                        <div className="gold">
                                <button className="upgrade"></button>
                        </div>
                        


                </div>
        </div>
    )
}

export default Mine;