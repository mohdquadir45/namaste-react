// what is class based component
import React from "react";
class UserClass extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log(" child userClass Constructor called ")
    }
    
    componentDidMount() {
    console.log("Child userClass ComponentDidMount")
}
    
    render() {
        
        const { name, location } = this.props
        const { count } = this.state
        console.log(" child  userClass render is called")
        return (
            <div className="">
                <h1>count is  : { count}</h1>
                <button
                    onClick={() => {
                        this.setState({
                            count : this.state.count + 1
                        })
                    }}
                    >Increment count</button>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Location </h4>
            </div>
        )
    }

}
export default UserClass; 