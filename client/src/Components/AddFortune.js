import React, {useState} from 'react';
import {createFortune} from "../APIConnection/ApiFunctions.js";

function AddFortune() {
    const [newFortune, setNewFortune] = useState("")

    function addFortune() {
        createFortune(newFortune)
        setNewFortune("");
    }

    return (
        <div className="add-input">
            // when input is changed set it to new text
            <input value={newFortune} onChange={(e) => {setNewFortune(e.target.value)}} id="add-fortune-input" type="text"/>
            <button className="button" onClick={addFortune}>Add fortune!!!</button>
        </div>
    );
}

export default AddFortune;