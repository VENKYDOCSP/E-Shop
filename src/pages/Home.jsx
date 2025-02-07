import React, { memo } from 'react'
import ProductJson from '../ProductJson'
import Banner from '../components/Home/Banner';
import HomeProducts from '../components/Home/HomeProducts';

const Home = () => {
    return (
        <>
            <Banner />
            <HomeProducts ProductJson={ProductJson} />
        </>
    )
}

export default Home