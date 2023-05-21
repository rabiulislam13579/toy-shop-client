import React, { useEffect, useState } from 'react';
import ShowPhoto from './ShowPhoto';

const Photos = () => {
    const [photos,setPhotos]= useState([])
    useEffect(()=>{
        fetch(' https://toy-shop-server-phi.vercel.apptoys')
        .then(res=>res.json())
        .then(data=>setPhotos(data))
    },[])



    return (
        <div className='md:mx-48'>
            <div>
                <h2 className='text-center text-2xl text-purple-900 my-3 font-bold'>Photo Gallery</h2>
            </div>
            <div className='grid md:grid-cols-3'>
            {
                photos.slice(0,6).map(photo=><ShowPhoto
                key={photo._id}
                photo={photo}
                ></ShowPhoto>)
            }
            </div>
        </div>
    );
};

export default Photos;