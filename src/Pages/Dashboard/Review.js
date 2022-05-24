import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Review = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = data => {

        const review = {
            name: data.name,
            review: data.review,
            rating: data.rating
        }
        fetch("http://localhost:5000/review", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Thanks for your review')
                    reset();
                }
                else {
                    toast.error('Failed to add a review');
                }
            })

    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-primary text-center mt-5 mb-5 '>Add a new Tool</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs ">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="review"
                        placeholder="Tool review"
                        className="input input-bordered w-full max-w-xs"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'review is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                    </label>
                </div>
                <input placeholder="Rating out of 5" className="input input-bordered w-full max-w-xs"
                    {...register("rating", {
                        required: {
                            value: true,
                            message: 'rating is Required'
                        }
                    })}
                    type="number" name="rating" min="0" max="5" />
                <br />
                <input className='btn w-full max-w-xs text-white mt-5 mb-5' type="submit" value="Add Review" />
            </form>

        </div>
    );
};

export default Review;