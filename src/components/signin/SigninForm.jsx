import React from 'react';
import SigninLayout from '../../layouts/SigninLayout';
import FormLoader from '../loaders/FormLoader';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateSigninEmail, updateSigninPassword, resetSigninState } from '../../redux/auth/slice/auth-slice';
import { signin } from '../../redux/auth/thunk/auth-thunk';

const SigninForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { email, password, isLoading } = useSelector((state) => state.signin)

    const handleEmailOnChange = (e) => {
        dispatch(updateSigninEmail(e.target.value))
    }
    const handlePasswordOnChange = (e) => {
        dispatch(updateSigninPassword(e.target.value))
    }

        const submitSigninForm = async (e) => {
            e.preventDefault();

            const data = {
                email,
                password
            };

            try {
                const result = await dispatch(signin(data)).unwrap();
                
                console.log('Signin Success:', result);

                dispatch(resetSigninState());

                navigate('/');
            } catch (error) {
                console.error('Signup Failed:', error);
            }
        };
    return (
        <SigninLayout heading="Sign In">
            <form onSubmit={submitSigninForm} className="form">
                <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={handleEmailOnChange} />
                <input required="" className="input" type="password" name="password" id="password" placeholder="Password" value={password} onChange={handlePasswordOnChange} />
                <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
                <input className="login-button" type="submit" value="Sign In" />
                {isLoading && <FormLoader/>}
            </form>
        </SigninLayout>

    );
};

export default SigninForm;
