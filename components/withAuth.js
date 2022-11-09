import React, { Component } from 'react'
import axios from 'axios'
import router from 'next/router'

const withAuth = (LoggedInComponent) => {
    return class LoginComp extends Component {
        constructor(props) {
            super(props)
            this.state = {
                loggedIn: false
            }
        }
        async componentDidMount() {
            const headers = {
                Authorization: localStorage.getItem("Authorization"),
                Username: localStorage.getItem("user"),
            }
            try {
                const res = await axios.get("http://localhost:..../user",headers)
                if(res.status === 200){
                    this.setState({loggedIn: true})
                }
                //this.setState({loggedIn: true}, () => console.log(this.state))
            } catch(e) {
                console.log(e)
                router.push("/login")
            }
            console.log("fertig")
        }
        render() {
            return(
                <>
                    {this.state.loggedIn ? ( 
                        <LoggedInComponent {...this.props} />
                    ) : (
                        <></>
                    )}
                </>
            )
        } 
    }
}

export default withAuth