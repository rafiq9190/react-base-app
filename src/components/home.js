import React from 'react'

export default function Home (props){
    return(
<div >
    <p>helo from home page</p>
<h2>my name is {props.first-Name}</h2>
<h3>my father is{props.last-name}</h3>
    <h4>this color is {props.color}</h4>
</div>

    )
}
