import React, { useEffect, useState } from 'react';
import Toy from '../Home/Toy';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    // const limit = 20;
    // const [SearchItems, setSearchItems] = useState('')
    // const [filteredToys, setFilteredToys] = useState([])
    // const [searched, setSearched] = useState(false)
    // const visibleToys = searched? filteredToys.slice(0,limit): toys.slice(0, limit)
    useEffect(() => {
        fetch(' https://toy-shop-server-phi.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch=(event)=>{
        event.preventDefault();
        // const filteredToy = toys.filter(desiredToy)=>desiredToy.category?.toLowercase().includes(SearchItems.toLowercase())  false
    }

    return (

        <div className="overflow-x-auto w-full">
            <div className="form-control ms-48">
                <form onSubmit={handleSearch}>
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </form>
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Toy Info</th>
                        <th>Seller Info</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        toys.slice(0, 20).map(toy => <Toy
                            key={toy._id}
                            toy={toy}
                        ></Toy>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllToys;