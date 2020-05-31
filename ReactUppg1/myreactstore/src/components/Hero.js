//Mest för att tydligt och snabbt se att routingen fungerar
// "Placeholder Landing page content"

import React from "react";

export default function Hero({children}) {
  return <div className="hero">
    <div className="banner">
      <h1>welcome to react store</h1>
      <p>Happy shopping!</p>
      {children}
    </div>
  </div>
}
