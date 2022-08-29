import React, { useState } from "react";
import { loginUser } from '../firebase/firebase';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        if(email ==='' || password === ''){
            alert('enter all the fields');
        } else{
            let res = await loginUser(email, password);
            console.log(res.reloadUserInfo)
            if (res.reloadUserInfo.email) {
                navigate('/questions');
            } else {
                // msg = 'Check with your email or password
            }
        }
    }

    return(
        <div className="form" id="myForm">
            <form action="" className="form-container">
                <h1>Log in</h1>
                <div className="inputs">
                    <label >Email</label>
                    <input type="text" required className="form-contrl" placeholder="enter your EMAIL"
                        onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="inputs">
                    <label >Password</label>
                    <input type="password" required className="form-contrl" placeholder="enter your PASSWORD"
                        onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <button onClick={handleSubmitLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;