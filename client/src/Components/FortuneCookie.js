import React, {useState} from 'react';
import {getRandomFortune} from '../APIConnection/ApiFunctions.js';
import fortuneCookie from '../Images/fortunecookie.jpg';
import OpenFortuneCookie from '../Images/fortunecookie_open.jpg';


function FortuneCookie({fortunes}) {
    const [selectedFortune, setSelectedFortune] = useState("");
    const [cookieIsOpen, setCookieIsOpen] = useState(true);

    function openCookie() {
        // select a fortune to display
        if (!cookieIsOpen) {
            selectFortune();
            setCookieIsOpen(true);
        }
        // open cookie

    }

    async function selectFortune() {
        getRandomFortune().then((fortune) =>{
            // need .fortuneName to get the string
            setSelectedFortune(fortune.fortuneName)
        })
    }
    
    function resetCookie() {
        setCookieIsOpen(false);
        setSelectedFortune("");
    }

    return (
        <div className="open-fortune">
            <h1>🥠 Find your Fortune 🥠</h1>
            {<img src={cookieIsOpen ? OpenFortuneCookie : fortuneCookie} alt="fortune cookie" className="fortune-cookie"/>}
            <h2 className="cursive fortune-text">{cookieIsOpen ? selectedFortune : ""}</h2>
            <button className="button" onClick={resetCookie}>Reset</button>
            <button className="button" onClick={openCookie}>Open the cookie</button>
        </div>
    );
}

export default FortuneCookie;