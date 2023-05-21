import React from 'react';
import Banner from './Banner';
import Category from './Category';
import useTitle from '../../Hooks/useTitle';
import Photos from './Photos/Photos';
import About from '../Extra/About';
import Extra from '../Extra/Extra';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Photos></Photos>
            <Category></Category>
            <Extra></Extra>
        </div>
    );
};

export default Home;