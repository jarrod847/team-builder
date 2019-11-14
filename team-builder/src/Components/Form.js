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

    }

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="Name" type="text" name="name"  onChange={changeHandler} value={memeber.name} />
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Email" type="text" name="email"  onChange={changeHandler} value={memeber.email} />
            <label htmlFor="role">Role</label>
            <input id="role" placeholder="Role" type="text" name="role" onChange={changeHandler} value={memeber.role}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default TeamMemeber