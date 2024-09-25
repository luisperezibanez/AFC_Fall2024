
const CardContainer = (props) => {

    let { children } = props

    const style = {
        borderStyle: 'solid',
        borderWidth: '2px',
        padding: '20px'
    };

    return(
        <div style={style}>
            {children}
        </div>
    );
}

export default CardContainer;