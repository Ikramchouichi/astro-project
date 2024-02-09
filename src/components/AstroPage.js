import React, {useState, useEffect } from "react";
import NewAstroForm from "./NewAstroForm";
import AstroList from "./AstroList";
import Search from "./Search";

function AstroPage() {

   const [ Astros, setAstros ] = useState([])
   const [searchTerm, setSearchTerm] = useState("")

   useEffect(() => {
    fetch("http://localhost:3001/Astros")
      .then(res => res.json())
      .then(data => setAstros(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  

   function addAstro(newAstro){
    console.log(newAstro)
    setAstros([...Astros, newAstro])
   }
   
   const astrosToDisplay = Astros.filter(astro => astro.name.toLowerCase().includes(searchTerm.toLowerCase()))

return (
    <main>
      <NewAstroForm onAddAstro ={addAstro}/>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <AstroList Astros={astrosToDisplay} />
    </main>
  );
}

export default AstroPage;