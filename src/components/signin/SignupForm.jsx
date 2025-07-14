import React from 'react'
import SigninLayout from '../../layouts/SigninLayout';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { updateSignupConfirmPassword, updateSignupEmail, updateSignupName, updateSignupPassword, resetSignupState } from '../../redux/auth/slice/auth-slice';
import FormLoader from '../loaders/FormLoader';
import { signup } from '../../redux/auth/thunk/auth-thunk';
import { useAuth } from '../../context/AuthContext';
const SignupForm = () => {
    const { setIsLoggedIn } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { name, email, password, confirmPassword, isLoading } = useSelector((state) => state.signup)

    const handleNameOnChange = (e) => {
        dispatch(updateSignupName(e.target.value))
    }

    const handleEmailOnChange = (e) => {
        dispatch(updateSignupEmail(e.target.value))
    }
    const handlePasswordOnChange = (e) => {
        dispatch(updateSignupPassword(e.target.value))
    }
    const handleConfirmPasswordOnChange = (e) => {
        dispatch(updateSignupConfirmPassword(e.target.value))
    }

    const submitSignupForm = async (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            password,
            confirmPassword
        };

        try {
            const result = await dispatch(signup(data));

            if (result.type === "auth/signup/fulfilled") {
                setIsLoggedIn(true);
                console.log('Signup Success:', result);
                dispatch(resetSignupState());

                navigate('/');
            }
        } catch (error) {
            console.error('Signup Failed:', error);
        }
    };

    return (
        <SigninLayout heading="Sign Up">
            <form onSubmit={submitSignupForm} className="form">
                <input required className="input" type="text" name="name" id="name" placeholder="Name" value={name} onChange={handleNameOnChange} />
                <input required className="input" type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={handleEmailOnChange} />
                <input required className="input" type="password" name="password" id="password" placeholder="Password" value={password} onChange={handlePasswordOnChange} />
                <input required className="input" type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordOnChange} />
                <span className="forgot-password"><Link to={"/signin"}>Already have an account?</Link></span>
                <input className="login-button" type="submit" value="Sign Up" />
                {isLoading && <FormLoader />}
            </form>
        </SigninLayout>
    )
}

export default SignupForm