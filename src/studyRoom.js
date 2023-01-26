import { useState } from "react";
function StudyRooms() {
const [message, setMessage] = useState('')
const [message1, setMessage1] = useState('')
const [message2, setMessage2] = useState('')
const [message3, setMessage3] = useState('')
const [message4, setMessage4] = useState('')
const [counter, setCounter] = useState(1)
let Room;
const handleChange = (event)=>{
   Room = event.target.value
        }
const setRoom =()=>{
    setCounter(counter +1)
    if(counter === 1){
    setMessage(Room)
    }
    else if(counter === 2){
    setMessage1(Room)
    }
    else if(counter === 3){
    setMessage2(Room)
    }
    else if(counter === 4){
    setMessage3(Room)
    }
    else if(counter === 5){
    setMessage4(Room)
    }
    console.log(counter)
}
    return (
        <div className="rooms">
            <div className="roomTopSection">     
                <h2>Add New Room</h2>
                <div className="together">
                    <input type="text" className="inputBoxes" id="newRoomName" onChange={handleChange}></input>
                    <button className="button" onClick={setRoom}>Add</button>
                </div>
            </div>
        <div id="roomSection" className="roomSections">
        <h3>{message}</h3>
        </div> 
        <div id="roomSection1" className="roomSections">
        <h3>{message1}</h3>
        </div> 
        <div id="roomSection2" className="roomSections">
        <h3>{message2}</h3>
        </div> 
        <div id="roomSection3" className="roomSections">
        <h3>{message3}</h3>
        </div> 
        <div id="roomSection4" className="roomSections">
        <h3>{message4}</h3>
        </div>
        <div className="centerText">For Now I Only Have 5 Study Rooms</div>
        </div>
    )
}
export default StudyRooms;
