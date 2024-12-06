import React, { useState } from 'react';


const Input = () => {
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [fullname,setFullname] = useState("");
    const handleClick = () =>{
        setFullname(`${name} ${lastName}`)
    }
  return (
    <div>
       <label for="name">Your Name</label> <input type='text' id='name' onChange={(e)=>setName(e.target.value)}/>
       <br></br>
       <label for="lastName">Last Name</label> <input type='text' id='lastName' onChange={(e)=>setLastName(e.target.value)}/>
       <br>
       </br>
       <button onClick={handleClick}>Submit</button>
       {fullname && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          Full Name: {fullname}
        </p>
      )}
    </div>
  )
}

export default Input