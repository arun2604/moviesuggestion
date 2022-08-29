import React, { useState } from "react";
import { addUser } from '../firebase/firebase';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if(email === '' || password === ''){
            alert('enter all the fields');
        } else {
            let res = await addUser(email, password);
            if (res.user.reloadUserInfo.email) {
                navigate('/dashboard');
            }
        }
    }
    
    return(
        <div className="form" id="myForm">
            <form action="" className="form-container">
                <h1>Registration</h1>
                <div className="inputs">
                    <label >Email</label>
                    <input type="text" required className="form-contrl" placeholder="enter your EMAIL"
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="inputs">
                    <label >PassWord</label>
                    <input type="PassWord" required className="form-contrl" placeholder="enter your Password"
                        onChange={e => setPassword(e.target.value)} />                   
                </div>
                <button onClick={handleRegister}>submit</button>
            </form>
        </div>
    );
};


export default Signup;