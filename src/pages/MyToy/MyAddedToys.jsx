import React from 'react';
import { Link } from 'react-router-dom';

const MyAddedToys = ({ toy, handleDelete}) => {

   
    return (
        <tr className=' mx-48'>
            <th>
            <button onClick={()=>handleDelete(toy._id)} className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-36 h-36">
                            <img src={toy.photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toy.toyName}</div>
                        <div className="text-sm opacity-50">{toy.category}</div>
                    </div>
                </div>
            </td>
            <td>
                <p className="font-bold">{toy.name}</p>
                <span className="badge badge-ghost badge-sm">{toy.email}</span>
            </td>
            <td>{toy.price}</td>
            <th>
                <Link to={`/update/${toy._id}`}  className="btn btn-warning ">Edit</Link>
            </th>
        </tr>
    );
};

export default MyAddedToys;