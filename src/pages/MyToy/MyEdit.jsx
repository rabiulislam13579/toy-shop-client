import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MyEdit = () => {
    const {user} = useContext(AuthContext)
const toy = useLoaderData();

    const {_id, toyName, photo, name, category, quantity,price }= toy
  
    

    const handleEditToy=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.sellerName.value;
        const toyName = form.toyName.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const category = form.category.value;

        const dataObj={ name,category, toyName, photo, email, price, quantity};
        fetch(`http://localhost:5000/bookings/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
              alert('Updated successfully')
            }
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold"> EditToys now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleEditToy}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name:</span>
                                </label>
                                <input type="text" placeholder="SellerName:" defaultValue={name} name='sellerName' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo</span>
                                </label>
                                <input type="url" placeholder="photo url" name='photo' defaultValue={photo} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="text" placeholder="price" name='price' defaultValue={price} className="input input-bordered" />
                             </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">availableQuantity</span>
                                </label>
                                <input type="text" placeholder="availableQuantity" defaultValue={quantity} name='quantity' className="input input-bordered" />
                             </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" placeholder="category" defaultValue={category} name='category' className="input input-bordered" />
                             </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">toyName</span>
                                </label>
                                <input type="text" placeholder="toyName" name='toyName' defaultValue={toyName} className="input input-bordered" />
                             </div>
                            <div className="form-control">
                            <input className='btn mt-5' type="submit" value='Update' />
                             </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEdit;