import { generateRandomNumber } from '../helper.js';

const GeneratorBtn = (props) => {

    const { handleClick, visible } = props;

    const style = {
        opacity: visible ? 1 : 0
    };

    return (
        <button style={style} onClick={()=>handleClick(generateRandomNumber)}>
            Click to generate number
        </button>
    );
};

export default GeneratorBtn;