import React from 'react';
import RouteTitle from '../../Shared/RouteTitle/RouteTitle';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
        <RouteTitle title='Home'></RouteTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;