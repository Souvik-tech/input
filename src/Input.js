import React, { useState } from 'react';


const Input = () => {
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [fullname,setFullname] = useState("");
    const handleClick = (e) =>{
        e.preventDefault();
        setFullname(`${name} ${lastName}`)
    }
  return (
    <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleClick}>

            <label for="name">First Name:</label> <input required type='text' value={name} id='name' onChange={(e)=>setName(e.target.value)}/>
            <br></br>
            <label for="lastName">Last Name:</label> <input required type='text' id='lastName' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            <br>
            </br>
            <button type='submit'>Submit</button>
        </form>
       {fullname && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          Full Name: {fullname}
        </p>
      )}
    </div>
  )
}

export default Input