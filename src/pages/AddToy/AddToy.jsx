import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const AddToy = () => {

    const {user}= useContext(AuthContext)

    const handleAddToy=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.sellerName.value;
        const toyName = form.toyName.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const category = form.category.value;

        const dataObj={name,category, toyName, photo, email, price, quantity};

        fetch(' https://toy-shop-server-phi.vercel.app/toys',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        })
        fetch(' https://toy-shop-server-phi.vercel.app/bookings',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add Toys now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleAddToy}>
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
                                <input type="text" placeholder="SellerName:" name='sellerName' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo</span>
                                </label>
                                <input type="url" placeholder="photo url" name='photo' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="text" placeholder="price" name='price' className="input input-bordered" />
                             </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">availableQuantity</span>
                                </label>
                                <input type="text" placeholder="availableQuantity" name='quantity' className="input input-bordered" />
                             </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" placeholder="category" name='category' className="input input-bordered" />
                             </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">toyName</span>
                                </label>
                                <input type="text" placeholder="toyName" name='toyName' className="input input-bordered" />
                             </div>
                            <div className="form-control">
                            <input className='btn mt-5' type="submit" value='Add Now' />
                             </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;