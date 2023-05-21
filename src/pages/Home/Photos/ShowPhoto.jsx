import React from 'react';
import AOS from 'aos';

const ShowPhoto = ({ photo }) => {
    return (
        <div>
            
            <div data-aos="flip-left" >
                <img className='w-1/2 rounded ' src={photo.photo} alt="" />
            </div>
        </div>
    );
};

export default ShowPhoto;