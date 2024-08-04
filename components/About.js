
import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <>
            <User name={" my name is Mohammed (functional component) "} />
            <UserClass name={ " Hello I am class based component 😍"} />
        </>
    )
}

export default About;