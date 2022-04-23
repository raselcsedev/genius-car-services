import React from 'react';
import { Helmet } from 'react-helmet-async';

const RouteTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title} - Genius Car Services</title>
        </Helmet>
    );
};

export default RouteTitle;