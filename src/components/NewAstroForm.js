import React, {useState} from "react";

const initialFormState ={
name : "",
image : "",
description : "",

}

function NewAstroForm({ onAddAstro }) {

  const [formData, setFormData] = useState(initialFormState)

  function handleChange(event){
     const { name, value} = event.target
     setFormData({
      ...formData,
      [name]: value
     })
  }

  function handleSubmit (event){
    event.preventDefault()
    const config = {
          method: 'POST',
          headers : {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
    }
    fetch(" http://localhost:3001/Astros ", config)
        .then(response => response.json())
        .then(onAddAstro)
    setFormData(initialFormState)
  }

  return (
    <div className="new-astro-form">
      <h2> New Astro </h2>
      <form onSubmit={handleSubmit}>
        <input onChange = {handleChange} value ={formData.name} type="text" name="name" placeholder="astro name" />
        <input onChange = {handleChange} value ={formData.image} type="text" name="image" placeholder="Image URL" />
        <input onChange = {handleChange} value ={formData.description}  type="number" name="description"  placeholder="description" />
        <button type="submit">Add Astro </button>
      </form>
    </div>
  );
}

export default NewAstroForm;
