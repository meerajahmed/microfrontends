import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/bootstrap';
import { useHistory } from 'react-router-dom';

const MarketingRoot = () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { 
            onParentNavigate = () => {} 
        } = mount(ref.current, {
            onNavigate: (({pathname: nextPathName}) => {
                const {pathname: currentPathName} = history.location;
                if(currentPathName !== nextPathName) {
                    history.push(nextPathName);
                }
            })
        });

        history.listen(onParentNavigate)

    }, []);

    return (
        <div ref={ref}></div>
    );
};

export default MarketingRoot;