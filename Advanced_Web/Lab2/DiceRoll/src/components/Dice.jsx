import { useState, useEffect } from 'react'
import { NUMBER_ARRAY } from '../helper.js'

const Dice = ({value, doShake}) => {

    let diceText = NUMBER_ARRAY[value-1] // -1 because value will always range from 1 to 6
    let [shake, setShake] = useState("");

    useEffect(() => {
        setShake("fa-shake");
        const timer = setTimeout(() => {
            setShake("");
        }, 500);
        // Clean up the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, [doShake]);

    return (
        <i
            className={`fa-solid fa-dice-${diceText} dice-icon ${shake}`}
        />
    );
}

export default Dice;