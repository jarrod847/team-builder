import React, {useState} from "react"

const TeamMemeber = props => {
    const [memeber, setMemeber] = useState({
        name:"",
        email:"",
        role:""
    })

    const changeHandler = e => {
        setMemeber({...memeber, [e.target.name]: e.target.value})
    }

    const submitForm = e =>{
        e.preventDefault();
        props.addNewMember(memeber);
        setMemeber({name:"", email:"", role:""})
    }

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="Name" onChange={changeHandler} value={memeber.name} />
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Email" onChange={changeHandler} value={memeber.email} />
            <label htmlFor="role">Role</label>
            <input id="role" placeholder="Role" onChange={changeHandler} value={memeber.role}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default TeamMemeber