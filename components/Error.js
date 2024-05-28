
import { useRouteError } from "react-router-dom";
import React from "react";
const Error = () => {
    const error = useRouteError()
    console.log(error)

    return (
        <>
            <h3>Oops something went wrong.</h3>
            <h3>{ error.statusText}</h3>
        </>
    )
}
export default Error;