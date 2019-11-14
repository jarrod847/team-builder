import React, {useState} from "react"

const TeamMemeber = props => {
    const [memeber, setMemeber] = useState({
        name:"",
        email:"",
        role:""
    })

    const changeHandler = e => {
        setMemeber({...memeber, [event.target.name]: event.target.value})
    }

    return(
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="Name" onChange={changeHandler} value={memeber.name} />
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Email" onChange={changeHandler} value={memeber.email} />
        </form>
    )
}

export default TeamMemeber