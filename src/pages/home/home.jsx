import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from './banner/banner';
import Element1 from './element1/element1';
import Element2 from './element2/element2';
import Element3 from './element3/element3';

export const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Banner/>
        <Element1/>
        <Element2/>
        <Element3/>
    </div>
  )
}

export default Home;