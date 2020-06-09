import React from 'react'

export default function Home (props){
    return(
<div >
    <p>helo from home page</p>
<h2>my name is {props.title}</h2>
<h3>my father is{props.body}</h3>
    
</div>

    )
}
