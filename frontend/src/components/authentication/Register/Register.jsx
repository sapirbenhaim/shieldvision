import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import Login from '../Login/Login'
import SecurityImg from '../../../img/cyber-security.png'
import { logMessage } from '../../../utils/logger';

/**
 * Represents a registration component.
 * @param {Object} props - The component's props.
 * @param {Function} props.setCurrentAuthTab - Function to set the current authentication tab.
 */
const Register = ({ setCurrentAuthTab }) => {

    // State for form data and error message
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isAdmin: false,
    });
    const [error, setError] = useState("");

    /**
     * Handles changes in form input fields.
     * @param {Event} input - The input element event.
     */
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }

    /**
     * Submits the registration form.
     */
    const submit = async () => {
        try {
            const url = "http://localhost:8080/api/register"
            const { data: res } = await axios.post(url, data);
            loginAfterRegister();
            logMessage(res.message);
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }

    /**
     * Logs in the user after successful registration.
     */
    const loginAfterRegister = async () => {
        const loginData = {
            email: data.email,
            password: data.password
        }
        try {
            const url = "http://localhost:8080/api/authentication/login"
            const { data: res } = await axios.post(url, loginData);
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
        <div id='register'>

            <div className="form">
                <div className='topContainer'>
                    {/* LOGIN / REGISTER TABS */}
                    <div className='tabs'>
                        <div className='registerTab'>
                            <p className='tabText selectedText'>Sign up</p>
                        </div>
                        <div onClick={() => setCurrentAuthTab(<Login setCurrentAuthTab={setCurrentAuthTab} />)} className='loginTab'>
                            <p className='tabText'>Sign in</p>
                        </div>
                    </div>
                    <img id='securitiyImg' src={SecurityImg} alt="securityImg" />

                </div>

                {/* FIRST NAME INPUT */}
                <div className="inputContainer ic2">
                    <input
                        id="firstName"
                        className="input"
                        type="text"
                        placeholder="First name"
                        name='firstName'
                        onChange={handleChange}
                        value={data.firstName}
                        required />
                </div>

                {/* LAST NAME INPUT */}
                <div className="inputContainer ic2">
                    <input
                        id="lastName"
                        className="input"
                        type="text"
                        placeholder="Last name"
                        name='lastName'
                        onChange={handleChange}
                        value={data.lastName}
                        required />
                </div>

                {/* EMAIL INPUT */}
                <div className="inputContainer ic2">
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
                <div className="inputContainer ic2">
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

                {error && <div>{error}</div>}
                <button onClick={() => submit()} type="text" className="submit">submit</button>
            </div>
        </div>
    )
}

export default Register
