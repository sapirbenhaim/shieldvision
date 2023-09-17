import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import SecurityImg from '../../../img/cyber-security.png'
import Register from '../Register/Register';
import { logMessage } from '../../../utils/logger';

/**
 * Represents a component for user login.
 * @param {function} setCurrentAuthTab - Function to set the current authentication tab.
 */
const Login = ({ setCurrentAuthTab }) => {

    // State to store form data and error message
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    // Event handler for input field changes
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }

    // Function to submit the login form
    const submit = async () => {
        try {
            const url = "http://localhost:8080/api/authentication/login";
            logMessage("email to login: " + data.email);
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/dashboard"
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <div id='login'>
            <div className="form">
                <div className='topContainer'>
                    {/* LOGIN / REGISTER TABS */}
                    <div className='tabs'>
                        <div onClick={() => setCurrentAuthTab(<Register setCurrentAuthTab={setCurrentAuthTab} />)} className='registerTab'>
                            <p className='tabText'>Sign up</p>
                        </div>
                        <div className='loginTab'>
                            <p className='tabText selectedText'>Sign in</p>
                        </div>
                    </div>
                    <img id='securityImg' src={SecurityImg} alt="securityImg" />
                </div>

                {/* EMAIL INPUT */}
                <div className='inputContainer eInput'>
                    <label htmlFor="email">Work email</label>
                    <input
                        id="email"
                        className="input"
                        type="email"
                        placeholder="Email"
                        name='email'
                        onChange={handleChange}
                        value={data.email}
                        required />
                </div>

                {/* PASSWORD INPUT */}
                <div className='inputContainer pInput'>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        className="input"
                        type="password"
                        placeholder="Password"
                        name='password'
                        onChange={handleChange}
                        value={data.password}
                        required />
                </div>

                {/* Error message */}
                {error && <div>{error}</div>}
                
                {/* Submit button */}
                <button onClick={() => submit()} type="text" className="submitButton">Submit</button>
            </div>
        </div>
    )
}

export default Login
