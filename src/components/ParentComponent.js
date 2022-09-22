import React, { useState } from "react";
import Form from "./Form"
import DisplayData from "../DisplayData";

function ParentComponent(){
const [firstName, setFirstName] = useState("John");
const [lastName, setLastName] = useState("Henry");
const [newsletter, setNewsletter] = useState(false)

const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
const handleLastNameChange= (e) => {
    setLastName(e.target.value)
  }
const handleNewsletterChange=(e) => {
    setNewsletter(e.target.checked)
  }
    return(
        <div>
        <Form
        firstName={firstName}
        handleFirstNameChange={handleFirstNameChange}
        lastName={lastName}
        handleLastNameChange={handleLastNameChange}
        newsletter={newsletter}
        handleNewsletterChange={handleNewsletterChange}
        />

        <DisplayData firstName={firstName} lastName={lastName}/>
        </div>
    )
}

export default ParentComponent