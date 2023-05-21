import React from 'react';
import { Link, useRouteError } from 'react-router-dom';



const Error = () => {
    const {error, status} = useRouteError();
    console.log(error.message);
    return (
       <div className='m-48'>
        <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />
        <h1 className='text-primary'>Error: {status || 404}</h1>
            <h4 className='text-red-600'>{error.message}</h4>
            <Link to='/' className='btn '>Back To Home Page</Link>
       </div>
    );
};

export default Error;