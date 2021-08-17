import React from "react";
import ProductData from "./ProductData";
import classes from  './App.module.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
         <img src="/images/amazon.jpg" />
        </nav>
      </header>

     <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview"/>
        </div>

        <div className={classes.ProductData}>
         <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
         <p className={classes.ProductDescription}>{ProductData.description}</p>
        
        <h3 className={classes.SectionHeading}>Select Color</h3>
        </div>
     </div>

    </div>
  );
}

export default App;
