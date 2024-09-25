
const UserCard = (props) => {
    let { name, age } = props

    const style = {
        borderStyle: 'solid',
        borderWidth: '3px',
        padding: '10px',
        marginBottom: '10px'
    };

    return (
        <div style={style}>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>        
    );
}

export default UserCard;