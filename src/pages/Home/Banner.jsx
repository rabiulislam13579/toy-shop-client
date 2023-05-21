import React from 'react';
import './Banner.css';

const Banner = () => {
    return (

     <div className='bg'>
           <div className='flex items-center '>
            <div className='mx-24 my-12 bg rounded ps-8 pt-20 h-full items-center'>
                <h3 className='text-4xl text-purple-900 mb-3 font-bold'>Fun Toys For <br /> Your Kids</h3>
                <p className='mb-3 w-96 font-bold '>Find Toys Suppliers In China, the Website to Compare Prices! Find and Compare Toys Suppliers In China Online. ! <br /> Compare Products. Many Products. Quick Results. Find Easily. Search and Discover. Easy Access. Services: Best Results, Explore Now, New Sources, Best in Search.</p>
                <button className='btn '>Learn More</button>
            </div>
        </div>
     </div>

    );
};

export default Banner;