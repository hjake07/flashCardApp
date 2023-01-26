function inputSection(){

    return(
            <div className="allInputs">
                <h1 className="h1Flash">Flash-Card App</h1>
                <div className="inputsTop">
                    <input type="text" placeholder="Add Card Title Here" id="cardTitle" className="inputBoxes"></input>
                    <input type="text" placeholder="Add Card Content Here" id="cardContent" className="inputBoxes"></input>
                    <button className="deckButton">Add Card To Deck</button>
                </div>
            </div>
    )
}
export default inputSection;
