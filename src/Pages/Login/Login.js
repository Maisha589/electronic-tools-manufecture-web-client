import React from 'react';
import auth from "../../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let googleError;

    if (gError) {
        googleError = <p>{gError?.message}</p>
    }

    if (gLoading) {
        return <Loading></Loading>
    }

    if (gUser) {
        console.log(gUser);
        navigate("/");

    }
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }

    return (
        <div class="flex flex-col w-full border-opacity-50">
            <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
            <div class="divider">OR</div>
            {googleError}
            <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
                <button onClick={handleGoogleLogin} class="btn btn-primary hover:btn-secondary">Google Login</button>
            </div>
        </div>
    );
};

export default Login;