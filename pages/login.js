import React, {useState,useEffect} from 'react'
import axios from 'axios'

const login = () => {
    const [state, setState] = useState({
        error: "",
        user: "",
        password: ""
    })
    const onChange = (e) => {
        const {id,value} = e.target
        setState({...state, [id]: value})
    }
    const login = async () => {
        if(!state.user || !state.password){
            setState({...state,error:"please enter username and password"})
            return
        } else {
            setState({...state,error:""})
        }
        const body = {
            username: state.user,
            password: state.password
        }
        try {
            const res = await axios.post(`http://localhost:..../login`, body)
            if(res.status === 200){
                localStorage.setItem('user', res.data.username)
                localStorage.setItem('Authorization', res.data.token)
            }
        } catch(e) {
            console.log(e)
            //setState({...state,error:......})
        }
    }
    return (
        <div className="loginwrapper">
            <div className="loginheading">Log in</div>
            {state.error ? <div className="errorlabel">{state.error}</div> : <></>}
            <div className="userlabel">Username</div>
            <input type="text" placeholder="Username" id="user" className="input" onChange={onChange}/>
            <div className="userlabel margintop">Password</div>
            <input type="password" placeholder="Password" id="password" className="input" onChange={onChange}/>
            <div className="button margintop" onClick={login}>log in</div>
        </div>
    )
}

export default login