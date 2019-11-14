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
        <Form></Form>
    )
}

export default TeamMemeber