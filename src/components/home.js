import React from 'react'

export default function Home (props){
    return(
<div >
    <p>helo from home page</p>
<h2>my name is {props.fName}</h2>
<h3>my father is{props.lname}</h3>
    <h4>this color is {props.color}</h4>
</div>

    )
}
