import React from "react";
// const User = ({name}) => {
//     return (
//         <div className="user-card">
//             <h2>Name : {name}</h2>
//             <h3>Location : Pune</h3>
//             <h4>COntact : @mohammed</h4>
//         </div>
//     )

class User extends React.Component{
    constructor(props) {
        super(props)
        console.log("User child constructor ")
    }
    componentDidMount() {
        console.log("Child User ComponentDidMount")
    }
    render() {
            console.log("user child render")
            return (
                <div className="user-card">
                <h2>Name : {this.props.name}</h2>
                <h3>Location : Pune</h3>
                <h4>COntact : @mohammed</h4>
            </div>
            )
        }
    }

export default User;