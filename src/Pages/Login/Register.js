import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [updateProfile, updating] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [token] = useToken(gUser || user)


    let signInError;

    if (gError || error) {
        signInError = <p className='text-red-500'><small>
            {error?.message || gError?.message}
        </small></p>
    }

    if (gLoading || loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate("/");

    }

    const onSubmit = async (data) => {
        createUserWithEmailAndPassword(data.email, data.password, data.displayName);
        await updateProfile({ displayName: data.name });
        console.log('update done');
        console.log(data)
        navigate("/");
    }

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now</h1>
                    <p className="py-6">Welcome to our <span>ELECTRONIC TOOL ZONE</span>. Here you will have your best manufactured tools used for electronic purpose in your company.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body " >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold ">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("displayName", {
                                        required: {
                                            value: true,
                                            message: 'name is Required'
                                        },
                                        pattern: {
                                            message: 'Provide a valid Name'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold ">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-primary font-semibold">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signInError}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary hover:btn-secondary" type="submit" value="Sign In" />
                            </div>
                            <label className="label text-neutral">
                                <Link to='/login'>Already have an account?</Link>
                            </label>

                        </div>
                    </form>
                    <div className="divider">OR</div>

                    <div className="grid h-20 card rounded-box place-items-center">
                        <button onClick={handleGoogleLogin} className="btn btn-primary hover:btn-secondary">Google Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;