import React, { useEffect, useRef } from 'react';
import { mount } from 'dashboard/bootstrap';

const DashboardRoot = props => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return (
        <div ref={ref}></div>
    );
};

export default DashboardRoot;