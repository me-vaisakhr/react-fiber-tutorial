import { BrowserHistory } from 'history';
import React, { ReactNode } from 'react';
import { Router } from 'react-router-dom';

interface CustomRouterProps {
    children: ReactNode;
    history: BrowserHistory;
}
const CustomRouter: React.FC<React.PropsWithChildren<CustomRouterProps>> = ({
    children,
    history,
}) => {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location
    });

    React.useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
};

export default CustomRouter;