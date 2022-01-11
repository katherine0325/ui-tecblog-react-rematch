import React from "react";
import { Route } from "react-router-dom";

const generateLayout = Layout => {
    return ({component: Component, ...rest}) => {
        return (
            <Route {...rest} render={matchProps => (
                <Layout children={<Component {...matchProps} />}></Layout>
            )} />
        )
    };
}

export default generateLayout;
