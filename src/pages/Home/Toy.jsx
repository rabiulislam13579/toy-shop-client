import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { photo, toyName, price, name, quantity, category, email } = toy;

    return (

        <tr>
            <th>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-36 h-36">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                <p className="font-bold">{name}</p>
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>$ {price}</td>
            <th>
                <Link to={`allDetails/${toy._id}`} className="btn btn-primary ">Explore</Link>
            </th>
        </tr>

    );
};

export default Toy;