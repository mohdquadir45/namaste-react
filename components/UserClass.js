// what is class based component
import React from "react";
class UserClass extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Dummy name",
                address: {
                    city : "default"
                }
            }
        }
        console.log(" child userClass Constructor called ")
    }
    
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await data.json();
        const firstObject = json[0]
        console.log("firstName ===>", firstObject)
        this.setState({
            userInfo : firstObject
        })

        //make an api call here okay

        
    }
    componentDidUpdate(){
        this.timer = setInterval(() => {
           console.log("first")
       }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
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
                <h2>Name : {this.state.userInfo.name}</h2>
                <h3>Location : {this.state.userInfo.address.city}</h3>
                <h4>Location </h4>
            </div>
        )
    }

}
export default UserClass; 