import React from 'react'

export default function Home (props){
    return(
<div >
    <p>helo from home page</p>
<h2>{props.fName}</h2>
<h3>{props.lname}</h3>
</div>

    )
}
