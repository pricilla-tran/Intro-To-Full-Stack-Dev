import React, {useState} from 'react';
import AddFortune from "./AddFortune.js";
import FortuneCard from "./FortuneCard.js";
import { getFortunes } from '../APIConnection/ApiFunctions.js';

function SeeFortunes(props) {
    const [isShowingFortunes, setIsShowingFortunes] = useState(false);
    const [fortunes, setFortunes] = useState([])

    function toggleShowFortunes() {
        setIsShowingFortunes(!isShowingFortunes);
    }

    useEffect(() => {
        getFortunes().then(() => {
            setIsShowingFortunes(fortunes)
        })
    })

    return (
        <div>
            <button className="button" onClick={toggleShowFortunes}>Show fortunes</button>
            {isShowingFortunes ?
                <div id="fortunes" className={isShowingFortunes ? "" : "hidden"}>
                    <h2 className="cursive">Fortunes:</h2>
                    <AddFortune/>
                    <div className="fortune-list">
                        {fortunes.map((fortune) => <FortuneCard key={fortune._id} fortune={fortune}/>)}
                    </div>
                </div>
                :
                ""
            }
        </div>
    );
}

export default SeeFortunes;