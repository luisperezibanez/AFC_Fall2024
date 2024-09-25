import { useState } from 'react';

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const changeType = () => {
        setShowPassword(!showPassword);
    };

    return(
        <>
            <form className="form">
                Password:
                <input type={showPassword? "text" : "password"} id="password" placeholder="Enter your password" />
                <input type="checkbox" id="view" onChange={changeType}/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default LoginForm;