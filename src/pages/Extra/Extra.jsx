import React from 'react';
import Marquee from "react-fast-marquee";


const Extra = () => {
    return (
        <div className=' my-16'>
            <h2 className='text-purple-700 text-3xl font-bold text-center my-12'>Our Special Partners</h2>
            <Marquee speed={100}>
                <img className='m-img w-1/5' src="https://findvectorlogo.com/wp-content/uploads/2019/01/grand-and-toy-vector-logo.png" alt="" />
                <img className='m-img w-1/5' src="https://i.pinimg.com/736x/28/cf/c1/28cfc1ae965cf271335c2174fe913183.jpg" alt="" />
                <img className='m-img w-1/5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWMh8wDgtK5ZJ1cWTro-0ZKOm9a9KYEljMA&usqp=CAU" alt="" />
                <img className='m-img w-1/5' src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg" alt="" />
                <img className='m-img w-1/5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0jW0wjMgTECLuB7jU_sqf5yESWePCaD4Iw&usqp=CAU" alt="" />

            </Marquee>
        </div>
    );
};

export default Extra;