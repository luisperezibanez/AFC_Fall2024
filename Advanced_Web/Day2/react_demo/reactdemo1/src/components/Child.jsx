
const Child = (props) => {
    console.log(props)

    let { fname } = props;

    return <h3>{fname}</h3>;
}

export default Child;