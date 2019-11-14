import React from "react"

const People = props => {
    return(
        <div>
            {props.person.map((e, index) =>{
                return(
                    <div key={index}>
                    <h2>{e.name}</h2>
                    <p>{e.email}</p>
                    <p>{e.role}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default People