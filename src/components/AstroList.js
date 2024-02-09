import React from "react";
import AstroCard from "./AstroCard";

function AstroList({ Astros }) {

  const AstroCards= Astros.map(Astro => <AstroCard key={Astro.id} {...Astro} />)

  return (
    <ul className="cards">{AstroCards}</ul>
  );
}

export default AstroList;
