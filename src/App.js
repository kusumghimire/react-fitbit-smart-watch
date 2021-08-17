import React from "react";
import classes from  './App.module.css'
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

        </div>
     </div>

    </div>
  );
}

export default App;
