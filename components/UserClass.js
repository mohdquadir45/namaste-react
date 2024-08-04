// what is class based component
import React from "react";
class UserClass extends React.Component{
    constructor(props) {
        super(props)
        console.log("constructor ===>", props)
    }
    render() {
        
        
        return (
            <div className="">
                <h2>Name : {this.props.name}</h2>
                <h3>Location : @Pune Camp Pune</h3>
                <h4>Location </h4>
            </div>
        )
    }

}
export default UserClass; 