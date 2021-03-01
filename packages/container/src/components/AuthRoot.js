import React, { useEffect, useRef } from 'react';
import { mount } from 'auth/bootstrap';
import { useHistory } from 'react-router-dom';

const AuthRoot = props => {
    const { onSignIn } = props;
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { 
            onParentNavigate = () => {} 
        } = mount(ref.current, {
                initialPath: history.location.pathname,
                onNavigate: (({pathname: nextPathName}) => {
                    const {pathname: currentPathName} = history.location;
                    if(currentPathName !== nextPathName) {
                        history.push(nextPathName);
                    }
                }),
                onSignIn,
        });

        history.listen(onParentNavigate)

    }, []);

    return (
        <div ref={ref}></div>
    );
};

export default AuthRoot;