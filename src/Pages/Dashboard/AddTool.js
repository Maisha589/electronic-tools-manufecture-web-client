import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddTool = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()))

    const imageStorageKey = "2e0bc3df10acf4b40872b3ea07ac29f2";

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        name: data.name,
                        image: img,
                        description: data.description,
                        price: data.price,
                        available: data.available
                    }
                    fetch('http://localhost:5000/tools', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Tool added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add a tool');
                            }
                        })
                }

            })

    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">Add a New Tool</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tool Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Tools Name"
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
                    <label className="label">
                        <span className="label-text">description</span>
                    </label>
                    <input
                        type="description"
                        placeholder="Tool description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="price"
                        placeholder="Tool price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">available</span>
                    </label>
                    <input
                        type="available"
                        placeholder="Tool available"
                        className="input input-bordered w-full max-w-xs"
                        {...register("available", {
                            required: {
                                value: true,
                                message: 'available is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Tool" />
            </form>
        </div>
    );
};

export default AddTool;