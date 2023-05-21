import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShowCategory from './ShowCategory';

const Category = () => {
    const [categories,setCategories]=useState([])
    const [active, setActive]= useState('Marvel')
    useEffect(()=>{
      fetch(`https://toy-server-pi.vercel.app/toys/${active}`)
      .then(res=>res.json())
      .then(data=>setCategories(data))
    },[active]);

    const handleStarLight=(event)=>{
      event.preventDefault();
      setActive('Star Light');
    }
    const handleMarvel=(event)=>{
      event.preventDefault();
      setActive('Marvel');
    }
    const handleTransformers=(event)=>{
      event.preventDefault();
      setActive('Transformers');
    }



    return (
        <div className='mx-48'>
            <Tabs>
    <TabList className='text-center'>
      <Tab onClick={handleMarvel}>Marvel </Tab>
      <Tab onClick={handleStarLight}>Avengers</Tab>
      <Tab onClick={handleTransformers}>Transformers</Tab>
    </TabList>

    <TabPanel>
      <div className='grid md:grid-cols-3'>
        {
          categories.slice(0,3).map(category => <ShowCategory
          key={category._id}
          category={category}
          ></ShowCategory>  )
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3'>
        {
          categories.slice(0,3).map(category => <ShowCategory
          key={category._id}
          category={category}
          ></ShowCategory>  )
        }
      </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3'>
        {
          categories.slice(0,3).map(category => <ShowCategory
          key={category._id}
          category={category}
          ></ShowCategory>  )
        }
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Category;