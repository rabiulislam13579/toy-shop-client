import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyAddedToys from './MyAddedToys';
import useTitle from '../../Hooks/useTitle';

const MyToy = () => {
  useTitle('My Toy')
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])
    useEffect(()=>{
        fetch(` https://toy-shop-server-phi.vercel.app/bookings?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[user]);

    const handleDelete=id=>{
        const proceed = confirm('Are you sure want to delete ?')
        if(proceed){
            fetch(` https://toy-shop-server-phi.vercel.app/bookings/${id}`,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('Deleted Successfully');
                    const remaining = toys.filter(toy => toy._id !==id)
                    setToys(remaining)
                }
            
            })
        }
    }

    return (
        <div className="overflow-x-auto w-full">
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
            toys.map(toy=><MyAddedToys
            key={toy._id}
            toy={toy}
            handleDelete={handleDelete}
            ></MyAddedToys>)
           }
          </tbody>
          
        </table>
      </div>
    );
};

export default MyToy;